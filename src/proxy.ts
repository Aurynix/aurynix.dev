import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";

// The site has one public URL per page (aurynix.dev/), with no language in it.
// Each language is built as its own static page (/en, /ar); this proxy picks
// one per request and rewrites to it, so the address bar never changes.

const ONE_YEAR = 60 * 60 * 24 * 365;
const remember = (response: NextResponse, locale: Locale) => {
  response.cookies.set(LOCALE_COOKIE, locale, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
  return response;
};

/** Saved choice first, then the browser's language preferences, then English. */
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(saved)) return saved;

  const prefs = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q.slice(2)) : 1 };
    })
    .filter((p) => p.lang && p.q > 0)
    .sort((a, b) => b.q - a.q);

  const match = prefs.find((p) => isLocale(p.lang));
  return match ? (match.lang as Locale) : defaultLocale;
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Language button: /?lang=ar saves the choice, then back to the clean URL.
  const requested = url.searchParams.get("lang") ?? undefined;
  if (url.searchParams.has("lang")) {
    url.searchParams.delete("lang");
    const response = NextResponse.redirect(url, 303);
    return isLocale(requested) ? remember(response, requested) : response;
  }

  // Old or typed /en, /ar links: save that language and drop it from the URL.
  const first = url.pathname.split("/")[1];
  if (isLocale(first)) {
    url.pathname = url.pathname.slice(first.length + 1) || "/";
    return remember(NextResponse.redirect(url, 308), first);
  }

  // Everything else: serve the visitor's language without changing the URL.
  url.pathname = `/${pickLocale(request)}${url.pathname === "/" ? "" : url.pathname}`;
  const response = NextResponse.rewrite(url);
  // The same URL returns different HTML per language; caches must keep them apart.
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, robots.txt, sitemap.xml).
  matcher: ["/((?!_next|api/|.*\\..*).*)"],
};
