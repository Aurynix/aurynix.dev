import type { Product } from "@/data/products";
import { BrowserFrame } from "./BrowserFrame";
import { StatusBadge } from "./StatusBadge";
import { CheckIcon, ExternalIcon, GitHubIcon } from "./icons";

type Props = { product: Product; index: number };

const secondaryLink =
  "inline-flex min-h-11 items-center gap-1.5 rounded-btn border border-line-strong px-4 text-[15px] font-semibold text-ink hover:border-accent";

export function ProductCard({ product, index }: Props) {
  const { name, tagline, description, highlights, status, image, links, note } = product;
  const flip = index % 2 === 1; // screenshot alternates sides on wide screens
  const number = String(index + 1).padStart(2, "0");
  const headingId = `product-${product.slug}`;
  const hasLinks = links.app || links.docs || links.github;

  return (
    <article
      aria-labelledby={headingId}
      className={`flex flex-wrap items-center gap-10 rounded-card border border-line bg-surface p-6 sm:p-10 lg:gap-12 ${
        flip ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="min-w-0 flex-[1_1_380px]">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-[13px] font-bold tracking-[0.14em] text-subtle uppercase">
            {number} · {tagline}
          </p>
          <StatusBadge status={status} />
        </div>
        <h3 id={headingId} className="mt-2.5 text-4xl font-extrabold tracking-[-0.03em]">
          {name}
        </h3>
        <p className="mt-3.5 text-lg leading-relaxed text-muted">{description}</p>

        {highlights.length > 0 && (
          <ul className="mt-5 flex flex-col gap-3 text-base text-ink-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-5 flex-none text-accent-text" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {hasLinks && (
          <div className="mt-7 flex flex-wrap gap-2.5">
            {links.app && (
              <a
                href={links.app}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-btn bg-accent px-4 text-[15px] font-semibold text-accent-ink hover:bg-accent-hover"
              >
                Live App <ExternalIcon className="size-4" />
                <span className="sr-only"> for {name}</span>
              </a>
            )}
            {links.docs && (
              <a href={links.docs} className={secondaryLink}>
                API Docs <ExternalIcon className="size-4" />
                <span className="sr-only"> for {name}</span>
              </a>
            )}
            {links.github && (
              <a href={links.github} className={secondaryLink}>
                <GitHubIcon className="size-4" /> GitHub <ExternalIcon className="size-4" />
                <span className="sr-only"> repository for {name}</span>
              </a>
            )}
          </div>
        )}

        {note && <p className="mt-4 text-sm text-subtle">{note}</p>}
      </div>

      <div className="min-w-0 flex-[1_1_520px]">
        <BrowserFrame {...image} address={links.app?.replace(/^https?:\/\//, "")} />
      </div>
    </article>
  );
}
