import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cairo, Inter } from "next/font/google";
import { site } from "@/data/site";
import { getDictionary, isLocale, localeMeta, locales } from "@/i18n";
import { themeScript } from "@/components/theme";
import "../globals.css";

// Self-hosted at build time by next/font: no request to Google from visitors.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Arabic text. Inter has no Arabic glyphs, so the browser falls back to Cairo for them.
// Preloaded so Arabic text doesn't reflow when the font arrives.
const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

// Only /en and /ar exist; any other first segment is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).meta;

  return {
    metadataBase: new URL(site.url),
    title: t.title,
    description: t.description,
    applicationName: site.name,
    // One public URL for every language (see src/proxy.ts).
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      url: "/",
      siteName: site.name,
      title: t.title,
      description: t.description,
      locale: localeMeta[lang].ogLocale,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeMeta[l].ogLocale),
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0b1a" },
  ],
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    // data-theme is set by themeScript before paint, so React must not complain about it.
    <html
      lang={lang}
      dir={localeMeta[lang].dir}
      className={`${inter.variable} ${cairo.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
