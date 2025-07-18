# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Author](#author)

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

## Demo
<!-- Add a screenshot and live link if available -->
![Screenshot](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SvelteKit](https://kit.svelte.dev/) – Application framework
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS
- [Vite](https://vitejs.dev/) – Build tool
- [@lucide/svelte](https://lucide.dev/) – Icon library
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) – Linting and formatting
- [Adapter-Vercel](https://kit.svelte.dev/docs/adapter-vercel) – Deployment (Vercel)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Installation
```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) (or as indicated in the terminal).

### Building for Production
```bash
npm run build
```
Preview the production build:
```bash
npm run preview
```

### Deployment
This project uses the Vercel adapter for SvelteKit. See [SvelteKit deployment docs](https://kit.svelte.dev/docs/adapters) for more info.

## Folder Structure
```
rest-countries-api/
├── src/
│   ├── app.css                # Tailwind and custom styles
│   ├── app.html               # HTML template with theme initialization
│   ├── lib/
│   │   ├── components/        # Svelte components (CountryCard, ThemeToggleBtn)
│   │   ├── data/              # countries.json (static data)
│   │   ├── server/            # Data access functions
│   │   ├── theme.svelte.ts    # Theme store and logic
│   │   └── types.ts           # TypeScript types
│   └── routes/                # SvelteKit routes (pages)
│       ├── +layout.svelte     # App layout and theme toggle
│       ├── +page.svelte       # Homepage (country list, search, filter)
│       └── country/[slug]/    # Country detail pages
├── static/                    # Static assets (favicon, etc.)
├── package.json               # Project metadata and scripts
└── ...
```

## Theme Switcher
- The theme toggle button in the header allows switching between light and dark mode.
- The current theme is stored in `localStorage` and applied on page load.
- Theme logic is managed in `src/lib/theme.svelte.ts` and `src/lib/components/ThemeToggleBtn.svelte`.