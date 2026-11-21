// English copy for the whole page. ar.ts must have the same shape (TypeScript checks it).
// Product copy lives with each product in src/data/products.ts.

export const en = {
  meta: {
    title: "Aurynix — Production AI systems",
    description:
      "Aurynix builds production AI products for sales and business teams: Pulse for lead qualification, Nexus as an AI business assistant, and Apex for ML lead scoring.",
  },

  skipLink: "Skip to content",

  header: {
    navLabel: "Main",
    products: "Products",
    how: "How it's built",
    github: "GitHub",
    contact: "Get in touch",
    /** Tooltip and screen-reader label for the language (globe) button. */
    switchLanguage: "Switch to Arabic (العربية)",
  },

  theme: {
    label: "Theme",
    system: "Auto (device)",
    light: "Light",
    dark: "Dark",
  },

  hero: {
    allLive: (n: number) => `${n} products, all live in production`,
    someLive: (n: number) => `${n} live in production`,
    // Headline is split so the second part can be shown in the accent color.
    // Alternative draft: "Building intelligent products that solve real-world problems."
    headline: "AI systems that ship.",
    headlineAccent: "Not demos.",
    description:
      "Aurynix is a line of production AI products for sales and business teams. Each one runs live, with evaluation, monitoring, tests and real deployment.",
    cta: "Explore products",
    github: "View on GitHub",
  },

  // Every figure comes from a product README; update both together.
  metricsLabel: "Results",
  metrics: [
    { value: "2.2×", label: "more buyers found than random ordering (Apex)" },
    { value: "43%", label: "of buyers sit in the top 20% of scored leads (Apex)" },
    { value: "600+", label: "API tests run in CI on every change (Pulse)" },
    { value: "1 GiB", label: "of RAM runs the whole Pulse stack: six services (Pulse)" },
  ],

  products: {
    eyebrow: "THE PRODUCTS",
    title: "Products that help teams act on the right thing first.",
    liveApp: "Live App",
    apiDocs: "API Docs",
    github: "GitHub",
    /** Screen-reader text appended to each link so it makes sense on its own. */
    linkFor: (name: string) => ` for ${name}`,
    repoFor: (name: string) => ` repository for ${name}`,
    status: { live: "Live", beta: "Beta", soon: "Coming soon" },
  },

  how: {
    eyebrow: "HOW IT'S BUILT",
    title: "Shipping AI is 30% the model. The other 70% is what keeps it running.",
    model: "Model 30%",
    rest: "Everything around it 70%",
    pillars: {
      evaluation: {
        title: "Evaluation",
        body: "Leakage audits, calibration and held-out tests before a model goes live.",
      },
      monitoring: {
        title: "Monitoring",
        body: "Drift checks and live performance tracked against the original test results.",
      },
      security: {
        title: "Security",
        body: "Human approval for risky actions, prompt-injection defences, encrypted tokens.",
      },
      deployment: {
        title: "Deployment",
        body: "Dockerised services, CI on every pull request, and lean infrastructure.",
      },
    },
  },

  contact: {
    title: "Have a workflow AI should be handling?",
    body: "Tell us what your team spends its time on, and we'll get back to you.",
  },

  footer: {
    navLabel: "Footer",
    builtBy: "Built by the Aurynix team.",
    portfolio: "Founder's portfolio",
  },
};

export type Dictionary = typeof en;
