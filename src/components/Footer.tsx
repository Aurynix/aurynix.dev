import Image from "next/image";
import { site } from "@/data/site";
import { sortedProducts } from "@/data/products";

const footerLink = "inline-flex min-h-11 items-center px-2.5 text-muted hover:text-ink";

export function Footer() {
  // Static site: the year is set at build time and updates on the next deploy.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-6 gap-y-4 px-6 py-7 text-sm text-subtle">
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2.5 font-semibold text-ink">
            <Image src="/brand/logo.png" alt="" width={24} height={24} />© {year} {site.name}
          </span>
          <span>Built by the Aurynix team.</span>
        </div>
        <nav aria-label="Footer" className="-mx-2.5 flex flex-wrap">
          {sortedProducts
            .filter((p) => p.links.app)
            .map((p) => (
              <a key={p.slug} href={p.links.app} className={footerLink}>
                {p.name.replace(/^Aurynix /, "")}
              </a>
            ))}
          <a href={site.githubOrg} className={footerLink}>
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className={footerLink}>
            {site.email}
          </a>
          <a href={site.portfolio} className={footerLink}>
            Founder&apos;s portfolio
          </a>
        </nav>
      </div>
    </footer>
  );
}
