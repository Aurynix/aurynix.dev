import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Products } from "@/components/Products";
import { HowItsBuilt } from "@/components/HowItsBuilt";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-btn focus:bg-surface focus:px-4 focus:py-3 focus:font-semibold focus:text-ink focus:shadow-card"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Metrics />
        <Products />
        <HowItsBuilt />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
