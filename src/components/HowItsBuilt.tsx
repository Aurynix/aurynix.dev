import { DeploymentIcon, EvaluationIcon, MonitoringIcon, SecurityIcon } from "./icons";

const pillars = [
  {
    title: "Evaluation",
    body: "Leakage audits, calibration and held-out tests before a model goes live.",
    Icon: EvaluationIcon,
  },
  {
    title: "Monitoring",
    body: "Drift checks and live performance tracked against the original test results.",
    Icon: MonitoringIcon,
  },
  {
    title: "Security",
    body: "Human approval for risky actions, prompt-injection defences, encrypted tokens.",
    Icon: SecurityIcon,
  },
  {
    title: "Deployment",
    body: "Dockerised services, CI on every pull request, and lean infrastructure.",
    Icon: DeploymentIcon,
  },
];

export function HowItsBuilt() {
  return (
    <section id="how" aria-labelledby="how-title" className="mt-24 bg-inverse-bg text-inverse-ink">
      <div className="mx-auto max-w-page px-6 py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-12">
          <div className="min-w-0 flex-[1_1_520px]">
            <p className="text-sm font-bold tracking-[0.14em] text-inverse-accent">HOW IT&apos;S BUILT</p>
            <h2
              id="how-title"
              className="mt-3 text-4xl leading-[1.08] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl"
            >
              Shipping AI is 30% the model. The other 70% is what keeps it running.
            </h2>
          </div>
          <div className="min-w-0 flex-[1_1_320px]" aria-hidden>
            <div className="flex justify-between text-sm font-semibold text-inverse-muted">
              <span>Model 30%</span>
              <span>Everything around it 70%</span>
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
