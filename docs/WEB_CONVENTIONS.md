# Web Conventions

Standards and patterns for this codebase. Follow these when adding or modifying any file.

---

## File & Folder Naming

| Thing | Convention | Example |
| --- | --- | --- |
| Route layout files | `+layout.tsx` (SvelteKit-inspired) | `routes/+layout.tsx` |
| Route index files | `index.tsx` | `routes/index.tsx` |
| Named route files | kebab-case | `routes/not-found.tsx` |
| Component files | PascalCase | `components/SidebarProfile.tsx` |
| Hook files | `use` prefix, camelCase | `hooks/useTheme.ts` |
| Utility files | camelCase | `utils/formatDate.ts` |
| CSS modules | same name as component | `SidebarProfile.module.css` |

---

## Components

**Named exports only** — no default component exports inside `src/routes/` or `src/components/`.

```tsx
// Good
export function SidebarProfile() { ... }

// Avoid
export default function SidebarProfile() { ... }
```

`App.tsx` is the only file that uses a default export (required by Vite's entry convention).

**One component per file.** Small subcomponents that are only used internally can colocate, but extract once a second file needs them.

---

## TypeScript

Strict mode is enabled — all compiler flags below are enforced:

- `strict: true`
- `noUnusedLocals` / `noUnusedParameters`
- `noUncheckedSideEffectImports`
- `erasableSyntaxOnly` (no `const enum`, `namespace`, or parameter properties)

**Props:** define an inline `type`, not `interface`, for component props.

```tsx
type Props = {
  name: string;
  active?: boolean;
};

export function Badge({ name, active = false }: Props) { ... }
```

**Avoid `any`.** Use `unknown` at system boundaries and narrow from there.

---

## Routing

All routes nest under `RootLayout` in `App.tsx`. The route tree is:

```
/       → Home (routes/index.tsx)
/*      → NotFound (routes/notfound.tsx)
```

Portfolio content sections (About, Skills, Experience, Projects, Contact) are **scroll-anchored sections** within `Home` — not separate routes. Only add a new route for a genuinely separate page (e.g., a future blog post).

Route files live in `src/routes/`. They export the page component by name matching the route concept (`Home`, `NotFound`, etc.).

---

## Styling

Plain CSS for now; Tailwind CSS is planned once layout build begins.

**Until Tailwind is added:**

- Global resets and tokens go in `src/index.css`.
- Component-scoped styles use CSS Modules (`Component.module.css`).
- `App.css` is for app-shell-level styles only (max-width, root margin).
- No inline `style` props for anything beyond truly dynamic values (e.g., a CSS variable set from JS).

**Once Tailwind is added:**

- Utility classes directly in JSX; CSS Modules only for complex animations or styles Tailwind cannot express.
- No `@apply` unless there is a compelling reason — it defeats the purpose of utility-first.

---

## Imports

Order (enforced mentally, not yet by a linter rule):

1. React / framework
2. Third-party libraries
3. Internal absolute paths (once path aliases are configured)
4. Relative imports
5. CSS / assets

```tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { SidebarProfile } from "../../components/SidebarProfile";
import styles from "./Home.module.css";
```

Always use the `.tsx` extension when importing TypeScript files (required by `allowImportingTsExtensions`).

---

## ESLint

Config: `eslint.config.js` (flat config, ESLint 9).

Active rule sets:
- `@eslint/js` recommended
- `typescript-eslint` recommended
- `eslint-plugin-react-hooks` recommended
- `eslint-plugin-react-refresh` (Vite mode)

Run before committing:

```bash
npm run lint
```

---

## Build & Dev

```bash
npm run dev        # Dev server (rolldown-vite)
npm run build      # tsc -b && vite build
npm run preview    # Serve production build locally
npm run lint       # ESLint check
```

Target: `ES2022`, bundler module resolution, `react-jsx` transform (no manual React import needed).

---

## Static Assets

Place in `public/`. Referenced as root-relative paths in code (`/resume.pdf`, `/og-image.png`).

- Resume file: `public/resume.pdf` — linked from the Download CV button
- OG image: `public/og-image.png` — referenced in `index.html` meta tags