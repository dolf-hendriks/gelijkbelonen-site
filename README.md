# GelijkBelonen.nl

SEO-focused micro-site about "gelijkwaardige beloning" (equal pay for temporary workers in the Netherlands). Powered by Onplia.

## Tech Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- Lucide React (icons)
- React Router DOM

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

1. Push to a GitHub repository
2. Import the repo in [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

Or use the Vercel CLI:

```bash
npx vercel --prod
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, calculator, FAQ, and CTA |
| `/over` | About page |

## Notes

- The calculator shows **demo/example values** — it's not connected to live CAO data
- For live calculations, connect with [Onplia](https://onplia.com)
- The "Bereken" button displays static example results
- SEO meta tags are set in `index.html`
