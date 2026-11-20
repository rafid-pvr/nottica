# NOTTICA

The repository contains the static prototype in `outputs/` and a new Next.js App Router application in `web/`. The prototype is intentionally preserved during migration and remains reachable from the new application at `/prototype/index.html`.

## Run the new application

Install dependencies and start the Next.js app from `web/`:

```powershell
cd web
pnpm install
pnpm dev
```

Other useful commands: `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`.

## Current boundaries

- The domain `nottica.in` has been purchased through Spaceship; DNS and hosting have not been configured here.
- The current prototype's inquiry data lives in each visitor's browser. It is not migrated into this repository and must not be used for live customer submissions.
- The new app includes studio pages, a 20-concept marketplace, and standalone sample demos. Inquiry persistence, authenticated workflows, database, uploads, payments, and deployment still need later phases and external service setup. Demo cart, RSVP, and inquiry interactions are illustrative only.

See [the migration notes](docs/foundation-and-migration.md) and [the legacy template ID map](docs/template-id-map.md).
