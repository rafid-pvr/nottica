# Foundation and migration notes

## Phase 0 audit

- Repository: `rafid-pvr/nottica`, working branch created locally as `feat/next-foundation`; upstream remains `origin/main`.
- The repository was a dependency-free, hash-routed static site in `outputs/index.html`, `outputs/styles.css`, and `outputs/app.js`.
- The existing prototype includes public studio pages, 12 concept template records and preview routes, a multi-step inquiry form, and a local `#/admin` dashboard.
- The prototype is also available from the new app at `/prototype/index.html` as a frozen copy of `outputs/`; do not edit that copy directly. Refresh it from `outputs/` only after reviewing the source diff.
- Inquiry data uses the `nottica_inquiries` browser `localStorage` key. The repository contains no customer database or exported inquiry records. Browser-local records are not available for migration from this checkout; do not collect real personal data with the prototype.
- The working tree already contained changes in `outputs/app.js` and `outputs/styles.css` before this foundation work. They remain preserved and uncommitted.
- The user confirmed the contact email, WhatsApp number, logo asset, and purchased domain. Contact settings are centralized in `web/src/lib/site-config.ts`.

## Delivered locally so far

- New application: Next.js App Router, TypeScript, Tailwind CSS, ESLint, and pnpm under `web/`.
- The old prototype remains in `outputs/` until its routes and data have been migrated and reviewed. It is not deleted or reset.
- Supabase is the planned backend for Postgres, Auth, and Storage. No project credentials are available yet, so the foundation does not connect to a live database or accept submissions.
- Preserve legacy template records and hash routes in the prototype; the new marketplace uses separate IDs and standalone routes.
- `nottica.in` is registered, but this work does not configure DNS, hosting, email, or deployment.

## Phase status and remaining work

1. **Foundation:** local app scaffold, brand assets, shared layout, environment template, project conventions, and migration map — delivered.
2. **Main site:** homepage, services, portfolio, about, contact, process, blog, privacy, and terms pages — delivered locally.
3. **Marketplace:** search/filter, template details, and live demo routing — delivered locally.
4. **20 concept demos:** standalone demo routes and sample interactions — implemented; needs visual and responsive review.
5. **Customer workflow:** inquiry, quotation, status, and revision flows with server-side validation — not connected to a live service; requires backend setup.
6. **Admin and backend:** Supabase schema/migrations, Auth, RLS, roles, private storage, and audit records — requires a Supabase project.
7. **Payments:** record and verify manual payments; connect a gateway only after merchant setup is confirmed — not implemented.
8. **Quality and launch readiness:** route, build, and local HTTP checks are run for the current milestone; accessibility, responsive review, security review, hosting/DNS, and production checks remain.

No push, DNS edit, payment collection, or deployment is part of the approved local foundation work.
