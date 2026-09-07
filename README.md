# Anuj Tiwari — Portfolio (React)

Modern React portfolio built with Vite, Tailwind CSS, and Framer Motion.

## Branches

- `master` — legacy static HTML/CSS portfolio (in `legacy/`)
- `react` — modern React version (this branch)

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
npm run preview  # preview production build
```

## Stack

- **React 19** + Vite 6
- **Tailwind CSS** — dark theme, glassmorphism, gradients
- **Framer Motion** — scroll animations & transitions
- **Vitt Mailer API** — contact form emails via `vitt-mailer-livid.vercel.app`
- **React Icons** — social & UI icons

## Deploy

Build and deploy the `dist/` folder to Netlify, Vercel, or any static host.

```bash
npm run build
```

## Project Structure

```
src/
  components/   # UI sections (Hero, About, Skills, Projects, Contact)
  data/         # Portfolio content (portfolioData.js)
  hooks/        # useInView animation hook
  api/          # Contact form API (vitt-mailer)
public/         # Images, resume PDF, static assets
legacy/         # Original HTML portfolio
```
