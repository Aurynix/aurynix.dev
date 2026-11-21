// Every product on the site comes from this list.
// To add a product: drop a screenshot in /public/products/ and add one object below.
// No component changes are needed. Cards are sorted by `order`.

export type ProductStatus = "live" | "beta" | "soon";

export type Product = {
  slug: string;
  name: string;
  /** Short category line shown above the name, e.g. "AI lead qualification". */
  tagline: string;
  /** 1–2 sentences. Keep claims to what the product's README says. */
  description: string;
  /** Up to three short key points. */
  highlights: string[];
  status: ProductStatus;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  links: {
    /** "Live App" link. Also shown in the screenshot's address bar. */
    app?: string;
    /** "API Docs" link. */
    docs?: string;
    /** "GitHub" link. Leave empty for private repos. */
    github?: string;
  };
  /** Optional small note under the links, e.g. about a slow first load. */
  note?: string;
  order: number;
};

export const products: Product[] = [
  {
    slug: "pulse",
    name: "Aurynix Pulse",
    tagline: "AI lead qualification",
    description:
      "Pulse collects every lead from a web form, Telegram and CSV imports, merges duplicates into one profile, and scores how likely each one is to buy. Hot leads reach the sales team on Telegram right away, with the lead's own words as the reason.",
    highlights: [
      "ML fit score from Apex, blended with LLM intent analysis",
      "Reads Arabic and English, and quotes the lead for every signal",
      "Follow-up reminders and a daily summary, so no lead is forgotten",
    ],
    status: "live",
    image: {
      src: "/products/pulse.webp",
      width: 1600,
      height: 818,
      alt: "Aurynix Pulse leads table, ranked by score with Hot, Warm and Cold tiers",
    },
    links: {
      app: "https://pulse.aurynix.dev",
      docs: "https://pulse-api.aurynix.dev/docs",
      // TODO: add https://github.com/Aurynix/aurynix-pulse once the repo is public (it is private now).
    },
    note: "The sign-in page has a demo login with sample leads.",
    order: 1,
  },
  {
    slug: "nexus",
    name: "Aurynix Nexus",
    tagline: "AI business assistant",
    description:
      "An AI assistant you chat with. It answers from your own documents, reads and sends your Gmail, manages your Google Calendar, searches the web, and remembers what you tell it. It always asks before doing anything that leaves the app.",
    highlights: [
      "Answers cite the file and page, with OCR for scanned PDFs",
      "Email and calendar actions wait for your approval",
      "Memory you can see and edit, with your entries taking priority",
    ],
    status: "live",
    image: {
      src: "/products/nexus.webp",
      width: 1321,
      height: 817,
      alt: "Aurynix Nexus chat waiting for approval before adding a meeting to the calendar",
    },
    links: {
      // Previous address, still live: https://aurynix-nexus-web.vercel.app
      app: "https://nexus.aurynix.dev",
      // TODO: add API docs URL if the Nexus backend docs become public.
      github: "https://github.com/Aurynix/aurynix-nexus-web",
    },
    order: 2,
  },
  {
    slug: "apex",
    name: "Aurynix Apex",
    tagline: "ML lead scoring",
    description:
      "Apex scores every lead with its chance of converting, sorts leads into High, Medium and Low priority, explains why each lead got its score, and monitors itself in production for data and score drift.",
    highlights: [
      "Top 20% of scored leads hold 43% of buyers on held-out test data",
      "Feature and score drift monitoring with PSI",
      "Retraining swaps in a new model only if it beats the current one",
    ],
    status: "live",
    image: {
      src: "/products/apex.webp",
      width: 1600,
      height: 829,
      alt: "Aurynix Apex ranks an uploaded CSV of leads into High, Medium and Low segments with the top reason for each score",
    },
    links: {
      app: "https://aurynix-apex-demo.onrender.com",
      docs: "https://aurynix-apex.onrender.com/docs",
      github: "https://github.com/Aurynix/aurynix-apex",
    },
    note: "The demo runs on free hosting and may take ~30–60 seconds to wake up on first load.",
    order: 3,
  },
];

export const sortedProducts = [...products].sort((a, b) => a.order - b.order);
