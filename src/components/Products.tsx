import { sortedProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="mx-auto max-w-page px-6 pt-24 pb-6">
      <p className="text-sm font-bold tracking-[0.14em] text-accent-text">THE PRODUCTS</p>
      <h2
        id="products-title"
        className="mt-3 max-w-[760px] text-4xl leading-[1.08] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl"
      >
        Products that help teams act on the right thing first.
      </h2>
      <div className="mt-14 flex flex-col gap-6">
        {sortedProducts.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
