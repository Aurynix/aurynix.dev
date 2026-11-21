import type { ProductStatus } from "@/data/products";

const styles: Record<ProductStatus, { badge: string; dot: string }> = {
  live: { badge: "bg-live-soft text-live-text", dot: "bg-live" },
  beta: { badge: "bg-beta-soft text-beta", dot: "bg-beta" },
  soon: { badge: "bg-soon-soft text-soon", dot: "bg-soon" },
};

export function StatusBadge({ status, label }: { status: ProductStatus; label: string }) {
  const s = styles[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${s.badge}`}
    >
      <span className={`size-1.5 rounded-full ${s.dot}`} aria-hidden />
      {label}
    </span>
  );
}
