import Image from "next/image";
import { site } from "@/data/site";
import { localeMeta, locales, type Dictionary, type Locale } from "@/i18n";
import { GitHubIcon, GlobeIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

const navLink =
  "inline-flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium text-muted hover:text-ink";

type Props = { lang: Locale; t: Dictionary };

export function Header({ lang, t }: Props) {
  const other = locales.find((l) => l !== lang)!;

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-header backdrop-blur-md">
      <nav
        aria-label={t.header.navLabel}
        className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-4 gap-y-1 px-6 py-3"
      >
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-2.5 text-xl font-extrabold tracking-tight text-ink"
        >
          <Image src="/brand/logo.png" alt="" width={34} height={34} priority />
          {site.name}
        </a>
        <div className="flex flex-wrap items-center gap-1">
          <a href="#products" className={navLink}>
            {t.header.products}
          </a>
          <a href="#how" className={`${navLink} max-md:hidden`}>
            {t.header.how}
          </a>
          <a href={site.githubOrg} className={`${navLink} gap-2 max-sm:hidden`}>
            <GitHubIcon className="size-[18px]" />
            {t.header.github}
          </a>
          {/* Full page load on purpose: the other language has its own <html lang dir>. */}
          <a
            href={`/${other}`}
            hrefLang={other}
            lang={other}
            aria-label={t.header.switchLanguage}
            className={`${navLink} gap-2`}
          >
            <GlobeIcon className="size-[18px]" />
            {/* System font: loading the web font for one word would shift the header. */}
            <span className="font-[system-ui,sans-serif]">{localeMeta[other].name}</span>
          </a>
          <ThemeToggle labels={t.theme} />
          <a
            href={`mailto:${site.email}`}
            className="ms-2 inline-flex min-h-11 items-center rounded-btn bg-ink px-5 text-[15px] font-semibold text-bg hover:opacity-90 max-lg:hidden"
          >
            {t.header.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
