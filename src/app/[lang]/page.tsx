import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Products } from "@/components/Products";
import { HowItsBuilt } from "@/components/HowItsBuilt";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getProducts } from "@/data/products";
import { getDictionary, isLocale } from "@/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = getDictionary(lang);
  const products = getProducts(lang);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-50 focus:rounded-btn focus:bg-surface focus:px-4 focus:py-3 focus:font-semibold focus:text-ink focus:shadow-card"
      >
        {t.skipLink}
      </a>
      <Header lang={lang} t={t} />
      <main id="main">
        <Hero t={t} products={products} />
        <Metrics t={t} />
        <Products t={t} products={products} />
        <HowItsBuilt t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} products={products} />
    </>
  );
}
