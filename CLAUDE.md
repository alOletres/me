# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for Alejandro T. Oletres Jr. (Software Engineer). The git repo root is `web/`, not the parent `portfolio/` directory — run all commands from `web/`.

## Commands

```bash
npm run dev      # Dev server (rolldown-vite)
npm run build    # tsc -b && vite build
npm run lint     # ESLint 9 flat config
npm run preview  # Serve the production build
```

There is no test framework in this project. `npm run build` (which type-checks first) plus `npm run lint` is the full verification pass.

`vite` is aliased to `rolldown-vite@7.2.5` in both `dependencies` and `overrides` — don't "fix" that to plain Vite.

## Architecture

**Single scrollable page, not a multi-page app.** `App.tsx` uses `MemoryRouter`, so the browser URL never changes and there is no real routing. The route tree exists only as a shell:

```
RootLayout (routes/+layout.tsx)
  └── index → Home (routes/index.tsx) — renders all seven sections in order
  └── *     → NotFound (unreachable in practice, since nothing navigates)
```

`Home` composes `Hero → WhatIDo → Experience → Achievements → Projects → Education → Contact` from `src/components/sections/`. Navigation is anchor-based (`#hero`, `#what-i-do`, …), never `<Link>`.

There are seven sections but only six cube faces, so `Achievements` reuses `--cube-orange` (shared with What I Do).

**Content is hardcoded** as typed arrays at the top of each section component (e.g. `projects: Project[]` in `sections/Projects.tsx`). There is no CMS or data layer — editing portfolio content means editing those arrays.

### Adding or renaming a section

A section id lives in three places that must stay in sync:

1. The section component's `id` attribute in `src/components/sections/`
2. `navLinks` in `src/components/TopNav.tsx` (label + href + cube color)
3. The `scroll-margin-top` anchor-offset selector list in `src/index.css`

Missing (3) makes the fixed top nav clip the section heading on scroll.

### Deploy base path — read before referencing any `public/` file

The site deploys to GitHub Pages under a subpath (`homepage: https://alOletres.github.io/me`, `npm run deploy`
→ `gh-pages -d dist`), so `vite.config.ts` sets `base: "/me/"`.

**Never write a root-relative asset path like `src="/avatar.png"`.** Vite rewrites only the URLs it owns —
`index.html` and bundled `import`s — and cannot see string literals inside components, so a leading-slash path
survives the build untouched and 404s in production against the domain root.

Use the `asset()` helper in `src/lib/asset.ts`, which prefixes `import.meta.env.BASE_URL`:

```tsx
<img src={asset('avatar.png')} />        // → /me/avatar.png
```

It strips a leading slash, so content arrays can keep their existing `image: "/hrms-landing.png"` form and be
resolved at the render site (`src={asset(image)}`) — that's how `Projects` and `Achievements` do it.

This breaks silently in a way local dev hides: `npm run dev` serves under the base too, but a stale
already-cached image can mask it. Verify against the real build — `npm run build && npm run preview`, then load
`http://localhost:4173/me/` and confirm no 404s in the network panel.

### Theming

Dark is the default. `ThemeContext` sets `document.documentElement.dataset.theme = "light"` and **deletes** the attribute for dark; all light overrides in `index.css` hang off `[data-theme="light"]`. The theme is persisted to `localStorage` under `"theme"`.

`index.html` contains an inline pre-hydration script that reads the same `localStorage` key to prevent FOUC. If the storage key or attribute contract changes, that script must change too.

### Scroll reveal

`useScrollReveal()` is called once in `RootLayout`. It runs a single `document.querySelectorAll('[data-reveal], [data-reveal-stagger]')` on mount and observes those elements with an `IntersectionObserver`, adding `.is-revealed` on intersect. **Elements added to the DOM after mount are never observed** — they will stay at `opacity: 0`. Animation itself is pure CSS in `index.css` (including the stagger delays and the `prefers-reduced-motion` reset).

### Styling

Design tokens (fonts, Rubik's-cube palette, spacing, radii, shadows, transitions) are CSS custom properties in `src/index.css`. All component styles live in one 1600-line `src/App.css`, organized by `/* ===== SECTION NAME ===== */` banner comments with a single consolidated `RESPONSIVE` block near the end — add new rules to the matching banner section rather than appending to the file.

The visual motif is a Rubik's cube: each nav link and section maps to a face color (`--cube-red`, `--cube-orange`, `--cube-yellow`, `--cube-green`, `--cube-blue`, `--cube-white`), and per-element color is passed via a `--link-color` custom property set through an inline `style` prop. Shadows are hard-edged offsets (`3px 3px 0px`), not blurs.

Icons are hand-written inline SVG components in `src/components/Icons.tsx` — no icon library.

### The downloadable CV

`public/resume.pdf` (the top nav's "Download CV") is **generated** — don't hand-edit it. Source of truth is
`docs/resume/resume.html`; rebuild with `docs/resume/build.sh`, which renders it via headless Chrome and
overwrites `public/resume.pdf`.

The original PDF came out of LibreOffice Writer and its `.odt` was never committed, so `resume.html` is a
reconstruction of that layout: US Letter, 63pt side margins, Carlito (the Calibri-metric font LibreOffice
substituted). The four Carlito faces live in `docs/resume/assets/` so the render is reproducible — the build
does not download anything. `docs/resume/resume.previous.pdf` is the last LibreOffice-produced version, kept
for comparison.

Two things that will bite you when editing it:

- Chrome's **new** headless mode hangs on `--print-to-pdf`; `build.sh` uses `--headless=old` deliberately.
- Do not put `break-inside: avoid` on `.job`. The first job carries six project sub-blocks, so the whole thing
  jumps to the next page and leaves page 1 half empty.

Keep it to two pages — the spacing values in the stylesheet are tuned so it just fits.

## Conventions

`docs/WEB_CONVENTIONS.md` is the authoritative style guide. Key points, plus where the code has since diverged from it:

- **Named exports only**, except `App.tsx`'s default export.
- **Inline `type` for props**, not `interface` (some existing files still use `interface` — follow the doc for new code).
- TypeScript strict mode with `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `verbatimModuleSyntax`. Use `import type` for type-only imports.
- Route files use SvelteKit-inspired naming: `+layout.tsx`, `index.tsx`.
- Static assets go in `public/` and are referenced root-relative (`/resume.pdf`, `/hrms-landing.png`).
- **Diverged:** the doc prescribes CSS Modules and Tailwind; the codebase actually uses global class names in `App.css`. Match the existing CSS approach unless a migration is explicitly requested.
- **Diverged:** the doc says to include the `.tsx` extension in imports; actual imports omit it. Follow the code.

## Stale artifacts — do not treat as source of truth

- `design-system/alejandroportfolio/MASTER.md` is a generated design-system doc specifying Archivo/Space Grotesk, a blue `#2563EB` accent, and soft rounded shadows. The implemented design is the Rubik's-cube theme in `src/index.css` (Barlow Condensed/Poppins/Space Mono, red accent, sharp corners). Its *anti-pattern and a11y checklist* at the bottom is still worth honoring; its tokens are not.
- `src/components/Sidebar.tsx` is orphaned — imported nowhere. `App.css` still carries a `SIDEBAR AVATAR` block.
- `README.md` is the untouched Vite template readme.
- `docs/PRD.md` describes the original product requirements; sections 1–7 are now built.