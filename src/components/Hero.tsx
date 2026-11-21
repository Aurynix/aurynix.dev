import { site } from "@/data/site";
import { sortedProducts } from "@/data/products";
import { BrowserFrame } from "./BrowserFrame";
import { GitHubIcon } from "./icons";

export function Hero() {
  const live = sortedProducts.filter((p) => p.status === "live").length;
  const featured = sortedProducts[0];

  return (
    <section
      id="top"
      className="mx-auto flex max-w-page flex-wrap items-center gap-14 px-6 pt-16 pb-10 sm:pt-22"
    >
      <div className="min-w-0 flex-[1_1_460px]">
        {live > 0 && (
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface px-3.5 py-2 text-sm font-semibold text-ink-2">
            <span className="size-2 rounded-full bg-live" aria-hidden />
            {live === sortedProducts.length && live > 1
              ? `${live} products, all live in production`
              : `${live} live in production`}
          </p>
        )}
        <h1 className="mt-6 text-5xl leading-[1.02] font-extrabold tracking-[-0.045em] text-balance sm:text-[68px]">
          {site.hero.headline}
          <br />
          <span className="text-accent-text">{site.hero.headlineAccent}</span>
        </h1>
        <p className="mt-5 max-w-[520px] text-lg leading-relaxed text-muted sm:text-xl">
          {site.hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#products"
            className="inline-flex min-h-12 items-center rounded-btn bg-accent px-6 text-base font-semibold text-accent-ink shadow-glow hover:bg-accent-hover"
          >
            {site.hero.ctaLabel}
          </a>
          <a
            href={site.githubOrg}
            className="inline-flex min-h-12 items-center gap-2 rounded-btn border border-line-strong bg-surface px-6 text-base font-semibold text-ink hover:border-accent"
          >
            <GitHubIcon className="size-5" />
            View on GitHub
          </a>
        </div>
      </div>

      {featured && (
        <div className="min-w-0 flex-[1_1_520px]">
          <BrowserFrame
            {...featured.image}
            address={featured.links.app?.replace(/^https?:\/\//, "")}
            priority
            shadow="frame"
          />
        </div>
      )}
    </section>
  );
}
