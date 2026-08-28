# Festival Internacional de Series Ría de Vigo

Responsive festival website built from the visual direction and public content of the Festival Internacional de Series Ría de Vigo website.

## Features

- Premium responsive editorial layout in the festival's blue-and-gold identity
- Glass navigation, mobile menu, subtle motion, and reduced-motion support
- Structured, accessible day-by-day 2026 programme with original poster views
- Dedicated public, industry, pitching, archive, destination, and aftermovie sections
- Static-safe contact flow that prepares an email in the visitor's mail client
- Institutional supporters, social channels, sponsor links, and legal references
- Local webfonts and optimized project assets
- Open Graph and X/Twitter sharing metadata

## Tech stack

- React 19
- Next.js-compatible App Router
- Vinext and Vite
- TypeScript
- Tailwind CSS
- Cloudflare Workers-compatible output

## Requirements

- Node.js 22.13 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

The development server is available at [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run start  # Start the production server
npm run lint   # Run ESLint
```

## Project structure

```text
app/             Page, metadata, and global styles
public/fonts/    Local webfont files
public/images/   Festival photography, branding, and sponsor assets
.openai/         Sites hosting configuration
```

## Deployment

The project produces a Cloudflare Workers-compatible build and includes the configuration required for OpenAI Sites hosting.
