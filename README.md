# aurynix.dev

The Aurynix company website: a single static landing page that explains what Aurynix is, which products it has, and how to open them.

Built with **Next.js 16** (App Router, fully static), **Tailwind CSS 4** and **TypeScript**. Deployed on **Vercel** from `main`.

There is no backend, database, auth or contact form, and no client-side JavaScript beyond what Next.js ships by default.

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (every route is prerendered as static HTML) |
| `npm run start` | Serves the production build |
| `npm run lint` | ESLint |

## Project layout

```
src/
  app/
    globals.css          design tokens (colors, fonts, radii, shadows): retheme here
    layout.tsx           <head> metadata: title, description, canonical, Open Graph, Twitter
    page.tsx             the page: puts the sections in order
    sitemap.ts           /sitemap.xml
    robots.ts            /robots.txt
    icon.png, apple-icon.png, favicon.ico
    opengraph-image.png, twitter-image.png   1200×630 social card
  components/            Header, Hero, Metrics, Products, ProductCard, HowItsBuilt, Contact, Footer
  data/
    site.ts              site copy, email, GitHub org, portfolio link
    products.ts          the product list (typed)
public/
  brand/logo.png
  products/*.webp        product screenshots
```

## Add or change a product

Products are data, not components. To add one:

1. Put a screenshot in `public/products/` (WebP, about 1600 px wide). Convert with, e.g.,
   `magick shot.png -resize 1600x -quality 82 public/products/name.webp`.
2. Add one object to `products` in `src/data/products.ts`:

```ts
{
  slug: "orbit",
  name: "Aurynix Orbit",
  tagline: "What it is, in 2–4 words",
  description: "One or two sentences on what it does.",
  highlights: ["Key point one", "Key point two", "Key point three"],
  status: "beta",                       // "live" | "beta" | "soon"
  image: { src: "/products/orbit.webp", width: 1600, height: 900, alt: "Describe the screenshot" },
  links: {
    app: "https://orbit.aurynix.dev",   // "Live App"
    docs: "https://…/docs",             // "API Docs"
    github: "https://github.com/Aurynix/…",
  },
  note: "Optional small print under the links.",
  order: 4,
}
```

Any link you leave out is hidden. Cards are sorted by `order`, and the screenshot alternates sides. The first product is also shown in the hero. The "N products, all live" badge counts `status: "live"` products automatically.

## Retheme

All colors, fonts, radii and shadows are CSS variables at the top of `src/app/globals.css`:
`:root` holds the light theme and the `prefers-color-scheme: dark` block holds the dark theme (the site follows the visitor's device). The `@theme inline` block maps them to Tailwind class names (`bg-surface`, `text-ink`, `rounded-card`, …), so components never contain raw colors.

The font is Inter, loaded by `next/font` in `layout.tsx` and self-hosted at build time.

## Copy and links

- Site copy (headline, description, email, GitHub org, portfolio): `src/data/site.ts`
- Results band figures: `src/components/Metrics.tsx`. Each figure comes from a product README; update both together.
- The footer year is set at build time and updates on the next deploy.

## Deployment

Vercel builds and deploys automatically:

- Every push to `main` deploys to production at https://aurynix.dev.
- Every other branch or pull request gets its own preview URL.

No environment variables are needed. DNS for `aurynix.dev` is managed in Vercel DNS. Only the apex domain and `www` belong to this project; the other subdomains (`pulse`, `pulse-api`, `nexus`, `apex`, `yazansedih`) point to their own services and are not touched by this repo.

## Before launch

- [ ] Set up email forwarding for `hello@aurynix.dev` (see the TODO in `src/data/site.ts`).
- [ ] Add the Pulse GitHub link once that repo is public (TODO in `src/data/products.ts`).
