// Site-wide copy and links. Edit here; components read from this file.

export const site = {
  name: "Aurynix",
  url: "https://aurynix.dev",

  // Browser tab title and search-result description.
  title: "Aurynix — Production AI systems",
  description:
    "Aurynix builds production AI products for sales and business teams: Pulse for lead qualification, Nexus as an AI business assistant, and Apex for ML lead scoring.",

  hero: {
    // Headline is split so the second part can be shown in the accent color.
    // Alternative draft: "Building intelligent products that solve real-world problems."
    headline: "AI systems that ship.",
    headlineAccent: "Not demos.",
    description:
      "Aurynix is a line of production AI products for sales and business teams. Each one runs live, with evaluation, monitoring, tests and real deployment.",
    ctaLabel: "Explore products",
  },

  // TODO before launch: set up email forwarding for hello@aurynix.dev
  // (e.g. Cloudflare Email Routing or ImprovMX → your inbox). Until then, mail is lost.
  email: "hello@aurynix.dev",

  githubOrg: "https://github.com/Aurynix",
  portfolio: "https://yazansedih.aurynix.dev",
} as const;
