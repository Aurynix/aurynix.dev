// Site-wide links and settings. Page copy (headline, section text) is in src/i18n/.

export const site = {
  name: "Aurynix",
  url: "https://aurynix.dev",

  // TODO before launch: set up email forwarding for hello@aurynix.dev
  // (e.g. Cloudflare Email Routing or ImprovMX → your inbox). Until then, mail is lost.
  email: "hello@aurynix.dev",

  githubOrg: "https://github.com/Aurynix",
  portfolio: "https://yazansedih.aurynix.dev",
} as const;
