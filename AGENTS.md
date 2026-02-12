# AI Agent Guide (AGENTS.md)

Welcome, fellow agent. This repository is a modern React portfolio built with a **Japandi** aesthetic.

## Project Overview
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS v4 (using the new `@theme` and `@utility` API in `src/index.css`).
- **Animations**: Framer Motion.
- **Icons**: Lucide React.

## Directory Structure
- `src/components/`: Reusable UI elements (Navbar, Footer).
- `src/sections/`: main page sections (Hero, About, Experience, Projects, Contact).
- `src/index.css`: The source of truth for the design system (colors, typography, custom patterns like `bg-wood-pattern`).

## Design Philosophy (Japandi)
- **Colors**: Off-white/Cream backgrounds, Vibrant Green accents, and Birch Wood textures.
- **Typography**: `Playfair Display` (Serif) for headings, `Inter` (Sans) for body text.
- **Spacing**: Intentional use of whitespace. Standard section padding is `py-20`.
- **Minimalism**: Avoid clutter. Every element should have a purpose.

## Development
- Run `npm run dev` to start the local development server.
- Build with `npm run build`.

## Important Note on Tailwind v4
This project uses **Tailwind CSS v4**. 
- Configuration is done primarily through CSS variables in `@theme` blocks within `src/index.css`.
- Traditional `tailwind.config.js` or `postcss.config.js` files are **not** required and should be avoided unless strictly necessary for third-party plugins.
