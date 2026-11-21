// Auto-reply for mail sent to hello@aurynix.dev.
//
// Flow: ImprovMX forwards hello@ to Gmail AND to a Resend receiving address.
// Resend calls this webhook (event: email.received); we send one reply from
// hello@aurynix.dev through Resend. See "Email auto-reply" in the README.
//
// Env: RESEND_API_KEY, RESEND_WEBHOOK_SECRET, optional AUTO_REPLY_FROM.

import { Resend } from "resend";
import { site } from "@/data/site";

const FROM = process.env.AUTO_REPLY_FROM || `Aurynix <${site.email}>`;

const SUBJECT = "We've received your message – Aurynix";

const TEXT = `Hi,

Thanks for reaching out to Aurynix. We've received your message and it's now under review.

We'll get back to you within 24–48 hours.

Best regards,
Aurynix Team
${site.url}`;

const HTML = `<p>Hi,</p>
<p>Thanks for reaching out to Aurynix. We've received your message and it's now under review.</p>
<p>We'll get back to you within 24–48 hours.</p>
<p>Best regards,<br>Aurynix Team<br><a href="${site.url}">${site.url.replace(/^https?:\/\//, "")}</a></p>`;

/** Senders that must never get an auto-reply (bounces, robots, ourselves). */
const NO_REPLY_SENDER = /(^|[<\s])(no-?reply|do-?not-?reply|mailer-daemon|postmaster|bounces?)[^@]*@/i;
const OWN_DOMAIN = new RegExp(`@${new URL(site.url).hostname.replace(/\./g, "\\.")}>?$`, "i");

/** Pull the bare address out of `Name <addr@x>`. */
const addressOf = (value: string) => (value.match(/<([^>]+)>/)?.[1] ?? value).trim();

/**
 * RFC 3834: don't answer automated mail, mailing lists or bulk mail,
 * otherwise two auto-responders can reply to each other forever.
 */
function skipReason(from: string, headers: Record<string, string>): string | null {
  const h = (name: string) => headers[name]?.toLowerCase() ?? "";
  if (!from) return "no sender";
  if (NO_REPLY_SENDER.test(from)) return "automated sender";
  if (OWN_DOMAIN.test(addressOf(from))) return "own domain";
  if (h("auto-submitted") && h("auto-submitted") !== "no") return "auto-submitted";
  if (/bulk|list|junk/.test(h("precedence"))) return "bulk or list";
  if (h("list-id") || h("list-unsubscribe")) return "mailing list";
  if (h("x-auto-response-suppress")) return "auto-response suppressed";
  return null;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  if (!apiKey || !webhookSecret) {
    console.error("inbound: RESEND_API_KEY or RESEND_WEBHOOK_SECRET is not set");
    return new Response("Not configured", { status: 500 });
  }

  const resend = new Resend(apiKey);

  // Verify the signature on the raw body; reject anything not from Resend.
  const payload = await request.text();
  let event;
  try {
    event = resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get("svix-id") ?? "",
        timestamp: request.headers.get("svix-timestamp") ?? "",
        signature: request.headers.get("svix-signature") ?? "",
      },
      webhookSecret,
    });
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type !== "email.received") return new Response("Ignored", { status: 200 });

  // The webhook has no headers; fetch the full message to check them.
  const { data: email, error: getError } = await resend.emails.receiving.get(event.data.email_id);
  if (getError || !email) {
    console.error("inbound: could not fetch received email", getError);
    return new Response("Fetch failed", { status: 500 }); // Resend retries
  }

  const headers = email.headers ?? {};
  const replyTo = email.reply_to?.[0] || email.from;
  const reason = skipReason(email.from, headers) ?? skipReason(replyTo, {});
  if (reason) {
    console.log(`inbound: no auto-reply (${reason})`);
    return new Response("Skipped", { status: 200 });
  }

  const messageId = email.message_id;
  const references = [headers["references"], messageId].filter(Boolean).join(" ");

  const { error: sendError } = await resend.emails.send(
    {
      from: FROM,
      to: replyTo,
      subject: SUBJECT,
      text: TEXT,
      html: HTML,
      headers: {
        ...(messageId ? { "In-Reply-To": messageId, References: references } : {}),
        // Marks this as an automatic reply so other responders don't answer it.
        "Auto-Submitted": "auto-replied",
        "X-Auto-Response-Suppress": "All",
      },
    },
    // Webhooks can be delivered more than once; this sends at most one reply per email.
    { idempotencyKey: `auto-reply/${email.id}` },
  );

  if (sendError) {
    console.error("inbound: auto-reply failed", sendError);
    return new Response("Send failed", { status: 500 });
  }

  return new Response("Replied", { status: 200 });
}
