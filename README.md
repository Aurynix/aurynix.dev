# aurynix.dev

The Aurynix company website: a single static landing page, in English and Arabic, that explains what Aurynix is, which products it has, and how to open them.

Built with **Next.js 16** (App Router, fully static), **Tailwind CSS 4** and **TypeScript**. Deployed on **Vercel** from `main`.

There is no backend, database, auth or contact form. The only client-side JavaScript of our own is the theme button.

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

### Environment variables

None are required. To point the "Live App" links somewhere else (for example a staging demo), copy `.env.example` to `.env.local` and edit the URLs:

```bash
cp .env.example .env.local
```

| Variable | Default |
|---|---|
| `PULSE_APP_URL` | https://pulse.aurynix.dev |
| `NEXUS_APP_URL` | https://nexus.aurynix.dev |
| `APEX_APP_URL` | https://aurynix-apex-demo.onrender.com |

They are read at build time, so restart `npm run dev` or redeploy after changing them. On Vercel, set them under Settings → Environment Variables.

## Project layout

```
src/
  proxy.ts               sends "/" to /en or /ar (saved choice, else browser language)
  app/
    globals.css          design tokens (colors, fonts, radii, shadows): retheme here
    [lang]/
      layout.tsx         <html lang dir>, fonts, metadata (title, canonical, hreflang, Open Graph)
      page.tsx           the page: puts the sections in order
      opengraph-image.png, twitter-image.png   1200×630 social card
    sitemap.ts           /sitemap.xml
    robots.ts            /robots.txt
    icon.png, apple-icon.png, favicon.ico
  components/            Header, Hero, Metrics, Products, ProductCard, HowItsBuilt, Contact, Footer,
                         ThemeToggle (+ theme.ts, the no-flash <head> script)
  i18n/
    config.ts            supported languages
    en.ts, ar.ts         all page copy, one file per language
  data/
    site.ts              email, GitHub org, portfolio link
    products.ts          the product list (typed), with each product's text per language
public/
  brand/logo.png
  products/*.webp        product screenshots
```

## Add or change a product

Products are data, not components. To add one:

1. Put a screenshot in `public/products/` (WebP, about 1600 px wide). Convert with, e.g.,
   `magick shot.png -resize 1600x -quality 82 public/products/name.webp`.
2. Add one object to `products` in `src/data/products.ts`, with its text in both languages:

```ts
{
  slug: "orbit",
  name: "Aurynix Orbit",
  status: "beta",                       // "live" | "beta" | "soon"
  image: { src: "/products/orbit.webp", width: 1600, height: 900 },
  links: {
    app: "https://orbit.aurynix.dev",   // "Live App"
    docs: "https://…/docs",             // "API Docs"
    github: "https://github.com/Aurynix/…",
  },
  order: 4,
  copy: {
    en: {
      tagline: "What it is, in 2–4 words",
      description: "One or two sentences on what it does.",
      highlights: ["Key point one", "Key point two", "Key point three"],
      imageAlt: "Describe the screenshot",
      note: "Optional small print under the links.",
    },
    ar: { /* same fields, in Arabic */ },
  },
}
```

TypeScript fails the build if a language is missing.

Any link you leave out is hidden. Cards are sorted by `order`, and the screenshot alternates sides. The first product is also shown in the hero. The "N products, all live" badge counts `status: "live"` products automatically.

## Languages

The site is in English (`/en`) and Arabic (`/ar`, right-to-left). Both are static pages.

- A first visit to `/` is redirected by `src/proxy.ts` to the browser's preferred language (Arabic if the browser prefers it, otherwise English).
- The language button in the header links to the other language. Visiting either page saves it in a `lang` cookie, so later visits to `/` go straight there.
- All page copy is in `src/i18n/en.ts` and `src/i18n/ar.ts`. Product text is in `src/data/products.ts`.
- To add a language: add it to `locales` in `src/i18n/config.ts`, create its dictionary next to `en.ts`, and add its `copy` to each product.

## Theme

The theme follows the device's light/dark setting by default. The button in the header cycles **Auto → Light → Dark** and saves the choice in `localStorage`; going back to Auto follows the device again. A small script in `<head>` (`src/components/theme.ts`) applies the theme before the page paints, so there is no flash.

## Retheme

All colors, fonts, radii and shadows are CSS variables at the top of `src/app/globals.css`:
`:root` holds the light theme and the `:root[data-theme="dark"]` block holds the dark theme. The `@theme inline` block maps them to Tailwind class names (`bg-surface`, `text-ink`, `rounded-card`, …), so components never contain raw colors.

The fonts are Inter, with Cairo for Arabic text, loaded by `next/font` in `src/app/[lang]/layout.tsx` and self-hosted at build time.

## Copy and links

- Page copy (headline, sections, results band) in each language: `src/i18n/en.ts`, `src/i18n/ar.ts`
- Email, GitHub org, portfolio link: `src/data/site.ts`
- Results band figures come from the product READMEs; update both together.
- The footer year is set at build time and updates on the next deploy.

## Deployment

Vercel builds and deploys automatically:

- Every push to `main` deploys to production at https://aurynix.dev (`/` redirects to `/en` or `/ar`).
- Every other branch or pull request gets its own preview URL.

No environment variables are needed (the optional ones above override the demo links). DNS for `aurynix.dev` is managed in Vercel DNS. Only the apex domain and `www` belong to this project; the other subdomains (`pulse`, `pulse-api`, `nexus`, `apex`, `yazansedih`) point to their own services and are not touched by this repo.

## Before launch

- [x] Set up email forwarding for `hello@aurynix.dev`.
- [ ] Add the Pulse GitHub link once that repo is public (TODO in `src/data/products.ts`).
