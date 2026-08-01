# Portfolio Web — CLAUDE.md

Personal portfolio site for Alejandro T. Oletres Jr., targeting Software Engineer roles. See `docs/PRD.md` for full product requirements.

## Stack

- **Framework:** React 19 + Vite (rolldown-vite 7)
- **Routing:** React Router v6
- **Language:** TypeScript 5.9
- **Styling:** App.css (plain CSS, no Tailwind yet — PRD calls for Tailwind in v1 build)
- **Linting:** ESLint 9 with typescript-eslint

## Project Structure

```
src/
  main.tsx          # React root mount
  App.tsx           # Route tree
  App.css           # Global styles
  index.css         # Base/reset styles
  routes/
    +layout.tsx     # RootLayout — wraps all routes with shared shell
    index.tsx       # Home page (/)
    notfound.tsx    # 404 fallback
```

## Routing Architecture

Single-layout model: all routes nest under `RootLayout` (`routes/+layout.tsx`), which renders an `<Outlet />`.

```
/           → Home (routes/index.tsx)
/*          → NotFound (routes/notfound.tsx)
```

### Architectural Changes from Initial Commit

The initial commit scaffolded a multi-page dashboard pattern with sub-routes. That structure was removed in favour of a single-page portfolio layout matching the PRD:

- **Removed:** `src/routes/dashboard/` directory and all sub-routes (`+layout.tsx`, `index.tsx`, `about.tsx`, `contact.tsx`, `profile.tsx`, `projects.tsx`)
- **Removed:** `/about` top-level route
- **Removed:** `/dashboard/*` nested route
- **Activated:** `<Route index element={<Home />} />` at `/` (was commented out in the initial commit)

The portfolio is a **single scrollable page** (FR-1 in PRD), so multi-page routing is not needed for content sections. Anchor-based navigation within the page replaces route-based navigation.

## Development

```bash
npm run dev      # Start dev server
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Key PRD Constraints

- No CMS — content is hardcoded in components for v1
- Resume file served as a static asset (`/resume.pdf`) from `public/`
- Light/dark theme toggle persisted in `localStorage` (FR-8)
- Responsive from 360px to 1920px (FR-10)
- Lighthouse performance ≥ 90 on desktop (FR-12)

## Planned Sections (not yet built)

Per `docs/PRD.md` section 6 content mapping:

1. Sidebar — profile photo, name, title, fact table, skill tags, Download CV
2. Hero — greeting, professional summary, CTA
3. What I Do — 6 engineering capability cards
4. Experience — timeline (Molave Youngs Milling Corp, iPay Bayad Center)
5. Featured Projects — cards (Requisition System, HRMS, DTR Mobile App, Delivery Cargo, CampConnection, White House Apartment System)
6. Education
7. Contact — email, phone, GitHub