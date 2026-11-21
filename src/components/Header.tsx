import Image from "next/image";
import { site } from "@/data/site";
import { GitHubIcon } from "./icons";

const navLink =
  "inline-flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium text-muted hover:text-ink";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-header backdrop-blur-md">
      <nav
        aria-label="Main"
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
            Products
          </a>
          <a href="#how" className={`${navLink} max-sm:hidden`}>
            How it&apos;s built
          </a>
          <a href={site.githubOrg} className={`${navLink} gap-2`}>
            <GitHubIcon className="size-[18px]" />
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="ml-2 inline-flex min-h-11 items-center rounded-btn bg-ink px-5 text-[15px] font-semibold text-bg hover:opacity-90 max-sm:hidden"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
