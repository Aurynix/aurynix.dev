import { site } from "@/data/site";
import type { LocalizedProduct } from "@/data/products";
import type { Dictionary } from "@/i18n";
import { BrowserFrame } from "./BrowserFrame";
import { GitHubIcon } from "./icons";

type Props = { t: Dictionary; products: LocalizedProduct[] };

export function Hero({ t, products }: Props) {
  const live = products.filter((p) => p.status === "live").length;
  const featured = products[0];

  return (
    <section
      id="top"
      className="mx-auto flex max-w-page flex-wrap items-center gap-14 px-6 pt-16 pb-10 sm:pt-22"
    >
      <div className="min-w-0 flex-[1_1_460px]">
        {live > 0 && (
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface px-3.5 py-2 text-sm font-semibold text-ink-2">
            <span className="size-2 rounded-full bg-live" aria-hidden />
            {live === products.length && live > 1 ? t.hero.allLive(live) : t.hero.someLive(live)}
          </p>
        )}
        <h1 className="mt-6 text-5xl leading-[1.02] font-extrabold tracking-[-0.045em] text-balance sm:text-[68px] rtl:text-[42px] rtl:sm:text-[56px]">
          {t.hero.headline}
          <br />
          <span className="text-accent-text">{t.hero.headlineAccent}</span>
        </h1>
        <p className="mt-5 max-w-[520px] text-lg leading-relaxed text-muted sm:text-xl">
          {t.hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#products"
            className="inline-flex min-h-12 items-center rounded-btn bg-accent px-6 text-base font-semibold text-accent-ink shadow-glow hover:bg-accent-hover"
          >
            {t.hero.cta}
          </a>
          <a
            href={site.githubOrg}
            className="inline-flex min-h-12 items-center gap-2 rounded-btn border border-line-strong bg-surface px-6 text-base font-semibold text-ink hover:border-accent"
          >
            <GitHubIcon className="size-5" />
            {t.hero.github}
          </a>
        </div>
      </div>

      {featured && (
        <div className="min-w-0 flex-[1_1_520px]">
          <BrowserFrame
            {...featured.image}
            alt={featured.imageAlt}
            address={featured.links.app?.replace(/^https?:\/\//, "")}
            priority
            shadow="frame"
          />
        </div>
      )}
    </section>
  );
}
