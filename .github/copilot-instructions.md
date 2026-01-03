# AI Coding Guidelines for radek4dev

## Project Overview
This is a static React portfolio website built with Vite, TypeScript, and Tailwind CSS. It features a single-page application with scrollable sections (Hero, About, Skills, Contact, Footer) and no dynamic routing or data fetching.

## Architecture
- **Structure**: `src/pages/Index.tsx` renders main sections as components from `src/components/`
- **Styling**: Tailwind CSS with custom design tokens in `src/index.css` (dark theme, blue/purple gradients)
- **Components**: shadcn/ui components in `src/components/ui/`, custom sections in `src/components/`
- **Animations**: Framer Motion for entrance animations and scroll-triggered effects using `useInView`

## Key Technologies & Patterns
- **Build Tool**: Vite with conditional base path for GitHub Pages deployment (`/radek4dev/` in production)
- **Fonts**: Outfit (sans-serif), Cormorant Garamond (serif) - import via Google Fonts
- **Icons**: Lucide React icons
- **Animations**: 
  - `motion.div` with `initial/animate` for entrance effects
  - `useInView(ref, { once: true, margin: "-100px" })` for scroll triggers
- **Styling Conventions**:
  - CSS variables for colors (e.g., `--primary: 210 100% 50%`)
  - Custom gradients: `--gradient-primary`, `--gradient-glow`
  - Apple-inspired design tokens in `src/index.css`

## Development Workflow
- **Start Dev Server**: `npm run dev` (serves on port 8080)
- **Build**: `npm run build` (outputs to `dist/`)
- **Lint**: `npm run lint` (ESLint with TypeScript, React hooks rules)
- **Preview**: `npm run preview` after build
- **Deploy**: Automatic via GitHub Actions on push to `main` branch

## Component Patterns
- **Section Components**: Export default function, use `motion.div` for animations
- **Data**: Hardcoded in component files (no external APIs)
- **Responsive**: Mobile-first with `md:` breakpoints
- **Accessibility**: Semantic HTML, proper alt texts

## File Organization
- `src/components/ui/`: shadcn/ui components (do not modify directly)
- `src/components/`: Custom page sections
- `src/pages/`: Route components (currently only Index)
- `src/hooks/`: Custom hooks (e.g., `use-mobile.tsx`)
- `src/lib/`: Utilities (e.g., `utils.ts` for `cn()` function)

## Common Tasks
- **Add New Section**: Create component in `src/components/`, import in `Index.tsx`
- **Update Styling**: Modify `src/index.css` for global tokens, component files for local styles
- **Add Animation**: Use Framer Motion variants or direct `animate` props
- **Responsive Design**: Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)

## Dependencies to Avoid Modifying
- shadcn/ui components: Use as-is or extend via composition
- Tailwind config: Only modify if adding new design tokens
- ESLint config: Standard React/TypeScript rules, `@typescript-eslint/no-unused-vars` disabled</content>
<parameter name="filePath">g:\gitrepo\radek4dev\.github\copilot-instructions.md