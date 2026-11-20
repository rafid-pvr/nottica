# NOTTICA project guide

## Project layout

- `outputs/` is the existing static prototype. Preserve its files, local inquiry behavior, and every existing Git change during migration.
- `web/` is the new Next.js App Router application. Build new production pages here and migrate behavior in deliberate, reviewable phases.
- `docs/` records migration decisions, legacy identifiers, and operational boundaries.

## Development commands

Run from `web/`:

- `pnpm dev` starts the local site.
- `pnpm lint` checks ESLint rules.
- `pnpm exec tsc --noEmit` checks TypeScript.
- `pnpm build` creates a production build.

Read `web/AGENTS.md` and the installed Next.js guides in `web/node_modules/next/dist/docs/` before changing framework conventions.

## Product and design rules

- Use the supplied NOTTICA artwork and the brand palette: burgundy `#790B13`, dark burgundy `#4B0710`, and warm ivory `#FFF0DC`.
- Keep the site editorial, accessible, responsive, and calm. Motion must respect `prefers-reduced-motion`; do not add WebGL or heavy animation without a clear user benefit and a mobile fallback.
- Mark concept brands, sample event data, and unverified details clearly. Never create fictional testimonials, client results, credentials, business registrations, or contact details.
- Use the contact details confirmed by the owner in `web/src/lib/site-config.ts`.

## Data and security

- The legacy inquiry form stores data in browser `localStorage`; it is a prototype, not a customer database. Do not collect real customer details through it.
- Never treat hidden routes or browser storage as authorization. Customer records require server-side authorization, database policies, and secure storage before live collection.
- Keep secrets out of source control. Use environment variables and least-privilege keys; never expose service-role keys to the browser.
- Do not enable live payments or upload customer files until the server-side workflow and access controls exist.
- Do not push, deploy, or change DNS without explicit owner approval.

## Migration and Git

- Keep every existing template ID stable or document a reversible mapping in `docs/template-id-map.md`.
- Preserve uncommitted changes in `outputs/app.js` and `outputs/styles.css`; review diffs before touching either file.
- Work in a feature branch, make focused commits only after review, and never force-push or reset the repository.
- Before launch, verify route behavior, responsive layouts, keyboard use, focus visibility, reduced-motion behavior, and production build output.
