import type { Dictionary } from "@/i18n";
import { DeploymentIcon, EvaluationIcon, MonitoringIcon, SecurityIcon } from "./icons";

const icons = {
  evaluation: EvaluationIcon,
  monitoring: MonitoringIcon,
  security: SecurityIcon,
  deployment: DeploymentIcon,
};

export function HowItsBuilt({ t }: { t: Dictionary }) {
  const pillars = (Object.keys(icons) as (keyof typeof icons)[]).map((key) => ({
    ...t.how.pillars[key],
    Icon: icons[key],
  }));

  return (
    <section id="how" aria-labelledby="how-title" className="mt-24 bg-inverse-bg text-inverse-ink">
      <div className="mx-auto max-w-page px-6 py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-12">
          <div className="min-w-0 flex-[1_1_520px]">
            <p className="text-sm font-bold tracking-[0.14em] text-inverse-accent">{t.how.eyebrow}</p>
            <h2
              id="how-title"
              className="mt-3 text-4xl leading-[1.08] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl"
            >
              {t.how.title}
            </h2>
          </div>
          <div className="min-w-0 flex-[1_1_320px]" aria-hidden>
            <div className="flex justify-between text-sm font-semibold text-inverse-muted">
              <span>{t.how.model}</span>
              <span>{t.how.rest}</span>
            </div>
            <div className="mt-2.5 flex h-3.5 overflow-hidden rounded-full bg-inverse-track">
              <span className="w-[30%] bg-inverse-bar-a" />
              <span className="w-[70%] bg-inverse-bar-b" />
            </div>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {pillars.map(({ title, body, Icon }) => (
            <li key={title} className="rounded-tile border border-inverse-line bg-inverse-surface p-7">
              <Icon className="size-7 text-inverse-accent" />
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2.5 text-[15.5px] leading-relaxed text-inverse-muted">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
