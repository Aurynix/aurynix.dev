import { site } from "@/data/site";
import type { Dictionary } from "@/i18n";
import { MailIcon } from "./icons";

export function Contact({ t }: { t: Dictionary }) {
  return (
    <section aria-labelledby="contact-title" className="mx-auto max-w-page px-6 pt-20 pb-24">
      <div className="flex flex-wrap items-center justify-between gap-8 rounded-card bg-accent px-6 py-12 text-accent-ink sm:px-12 sm:py-16">
        <div className="min-w-0 flex-[1_1_480px]">
          <h2
            id="contact-title"
            className="text-3xl leading-[1.08] font-extrabold tracking-[-0.035em] text-balance sm:text-[44px]"
          >
            {t.contact.title}
          </h2>
          <p className="mt-3.5 text-lg leading-relaxed">
            {t.contact.body}
          </p>
        </div>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex min-h-14 items-center gap-2.5 rounded-btn bg-white px-7 text-[17px] font-bold text-[#15122b] hover:bg-white/90"
        >
          <MailIcon className="size-5" />
          {site.email}
        </a>
      </div>
    </section>
  );
}
