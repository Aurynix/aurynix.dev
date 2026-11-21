import type { Dictionary } from "@/i18n";

// Results band. The figures and labels are in src/i18n/ (each from a product README).
export function Metrics({ t }: { t: Dictionary }) {
  return (
    <section aria-label={t.metricsLabel} className="mx-auto max-w-page px-6 pt-14 pb-6">
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {t.metrics.map((m) => (
          <li key={m.value} className="rounded-tile border border-line bg-surface p-5 sm:p-6">
            <p className="text-4xl leading-tight font-extrabold tracking-[-0.03em] text-accent-text sm:text-[44px]">
              {/* Keep "1 GiB", "600+" in reading order inside right-to-left pages. */}
              <span dir="ltr">{m.value}</span>
            </p>
            <p className="mt-1.5 text-sm leading-snug text-muted sm:text-[15px]">{m.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
