# GlobalOkul

Static, SEO-focused corporate website for a study-abroad consultancy based in Turkey, specialising in university admissions, Ausbildung and work programmes in Germany and other European countries.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) (static output) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) |
| Forms | [Formspree](https://formspree.io) |
| Structured data | JSON-LD (EducationalOrganization + LocalBusiness) |

## Features

- **Editorial "bulletin" design** — newspaper-inspired layout with a strict ink-and-cream colour palette and gold accents for CTAs only
- **Appointment/request form** — validated, POST to Formspree with stamp animation on success
- **WhatsApp integration** — phone links open a pre-filled WhatsApp conversation
- **Multi-page** — homepage, Germany (conditional admission / YKS / visa), Ausbildung, Sommer Work pages
- **Legal pages** — KVKK (Turkish data-protection disclosure) and Künye (legal imprint)
- **Responsive** — mobile-first, tested across viewport sizes
- **Accessible** — visible keyboard focus, `aria-hidden` on decorative elements, skip-to-content link, `prefers-reduced-motion` support
- **SEO-ready** — canonical URLs, Open Graph, Twitter Card meta tags, JSON-LD structured data

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Build

```bash
npm run build
```

Output is written to `dist/`. Deploy the contents of `dist/` to Cloudflare Pages (or any static host).

## Project Structure

```
src/
  components/   # Reusable Astro components
  data/         # site.js — single source of truth for content & config
  layouts/      # Base layout (head, JSON-LD, scroll-reveal)
  pages/        # Route pages (index, kvkk, kunye, ulkeler/…)
  styles/       # global.css (Tailwind layers + component classes)
```
