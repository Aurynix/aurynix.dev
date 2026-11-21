import type { LocalizedProduct } from "@/data/products";
import type { Dictionary } from "@/i18n";
import { ProductCard } from "./ProductCard";

type Props = { t: Dictionary; products: LocalizedProduct[] };

export function Products({ t, products }: Props) {
  return (
    <section id="products" aria-labelledby="products-title" className="mx-auto max-w-page px-6 pt-24 pb-6">
      <p className="text-sm font-bold tracking-[0.14em] text-accent-text">{t.products.eyebrow}</p>
      <h2
        id="products-title"
        className="mt-3 max-w-[760px] text-4xl leading-[1.08] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl"
      >
        {t.products.title}
      </h2>
      <div className="mt-14 flex flex-col gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} t={t.products} />
        ))}
      </div>
    </section>
  );
}
