import Image from "next/image";
import { site } from "@/data/site";
import type { LocalizedProduct } from "@/data/products";
import type { Dictionary } from "@/i18n";

const footerLink = "inline-flex min-h-11 items-center px-2.5 text-muted hover:text-ink";

type Props = { t: Dictionary; products: LocalizedProduct[] };

export function Footer({ t, products }: Props) {
  // Static site: the year is set at build time and updates on the next deploy.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-6 gap-y-4 px-6 py-7 text-sm text-subtle">
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2.5 font-semibold text-ink">
            <Image src="/brand/logo.png" alt="" width={24} height={24} />
            <bdi>© {year} {site.name}</bdi>
          </span>
          <span>{t.footer.builtBy}</span>
        </div>
        <nav aria-label={t.footer.navLabel} className="-mx-2.5 flex flex-wrap">
          {products
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
            {t.footer.portfolio}
          </a>
        </nav>
      </div>
    </footer>
  );
}
