// Results band. Every figure here comes from a product README; update both together.
const metrics = [
  { value: "2.2×", label: "more buyers found than random ordering (Apex)" },
  { value: "43%", label: "of buyers sit in the top 20% of scored leads (Apex)" },
  { value: "600+", label: "API tests run in CI on every change (Pulse)" },
  { value: "1 GiB", label: "of RAM runs the whole Pulse stack: six services (Pulse)" },
];

export function Metrics() {
  return (
    <section aria-label="Results" className="mx-auto max-w-page px-6 pt-14 pb-6">
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {metrics.map((m) => (
          <li key={m.value} className="rounded-tile border border-line bg-surface p-5 sm:p-6">
            <p className="text-4xl leading-tight font-extrabold tracking-[-0.03em] text-accent-text sm:text-[44px]">
              {m.value}
            </p>
            <p className="mt-1.5 text-sm leading-snug text-muted sm:text-[15px]">{m.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
