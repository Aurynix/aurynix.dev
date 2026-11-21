import type { ProductStatus } from "@/data/products";

const styles: Record<ProductStatus, { label: string; badge: string; dot: string }> = {
  live: { label: "Live", badge: "bg-live-soft text-live-text", dot: "bg-live" },
  beta: { label: "Beta", badge: "bg-beta-soft text-beta", dot: "bg-beta" },
  soon: { label: "Coming soon", badge: "bg-soon-soft text-soon", dot: "bg-soon" },
};

export function StatusBadge({ status }: { status: ProductStatus }) {
  const s = styles[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${s.badge}`}
    >
      <span className={`size-1.5 rounded-full ${s.dot}`} aria-hidden />
      {s.label}
    </span>
  );
}
