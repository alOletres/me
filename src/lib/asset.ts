/**
 * Resolve a `public/` file against Vite's configured base URL.
 *
 * The site deploys to GitHub Pages under a subpath (`/me/`), so a bare
 * root-relative `/avatar.png` would resolve to the domain root and 404.
 * Vite rewrites the URLs it owns (index.html, bundled imports) but never
 * touches string literals in components — this closes that gap.
 *
 * `import.meta.env.BASE_URL` always ends in a slash, so pass the path
 * without a leading one: `asset('avatar.png')`.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}