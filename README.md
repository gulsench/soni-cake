# Soni Cake — Website Concept

A single-page marketing site for **Soni Cake**, a premium independent cake shop in
Agartala, India. Bright, soft, airy and premium — built to match the brand's
Instagram aesthetic (modern Korean/Japanese bakery vibe).

## Tech stack

- **React + Vite + TypeScript**
- **Tailwind CSS** (custom pastel theme)
- **Motion** (Framer Motion) for soft fade + slide-up scroll reveals
- Single page, mobile-first, fully responsive
- No backend — all content is static / hardcoded

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Adding the real photos

All product images live in **`/public/images/`** and are referenced by fixed
filenames. See **`public/images/README.txt`** for the full list and which photo
goes where. Until a file is present, a tasteful pastel fallback + label shows in
its place, so the layout never breaks.

## Where to edit content

- **Contact details, WhatsApp number, Instagram, address, hours, nav links:**
  `src/lib/site.ts`
- **Menu / cake categories, descriptions & placeholder prices:**
  `src/sections/Cakes.tsx` (search for `PLACEHOLDER` to set real prices)
- **Footer credit line** ("Website concept by …"): `src/lib/site.ts` → `CONCEPT_CREDIT`

## Structure

```
src/
  components/    Header, SmartImage (fallback), Reveal (scroll animation), icons
  lib/           site.ts (content/config), motion.ts (animation variants)
  sections/      Hero, About, Cakes, Gallery, WhyUs, HowToOrder, Visit, Footer
  App.tsx        page assembly + floating WhatsApp button
```

The primary call-to-action everywhere is **WhatsApp** (`wa.me/919612540303`),
which is how Soni Cake takes orders.
