# NOTTICA website prototype

This is a dependency-free, browser-run prototype of the NOTTICA studio website and template selection journey.

## Open it

Open `index.html` in a modern browser. The Google Fonts connection is optional; the site uses system fallbacks when offline. No build step is required.

## Included

- Responsive studio home, services, about, portfolio, how-it-works, templates and contact pages.
- Twelve individual concept templates with category filters, text search, template details and unique preview routes.
- A three-step inquiry form with selected template context and a browser-generated inquiry reference.
- A local studio overview at `#/admin` showing inquiries saved in that same browser.
- Responsive layouts and the NOTTICA palette and wordmark direction from the supplied reference.

All twelve demo brands are fictional concepts. Demo pages identify themselves as NOTTICA concept websites and clearly disclose that checkout, RSVP, booking and contact delivery are not connected.

## Important prototype boundary

Inquiry data is stored in the browser's `localStorage`. The dashboard is not authenticated, and local storage is not a database or secure customer-data store. Do not use this prototype to collect real customer details. The form intentionally does not accept uploads. Email, WhatsApp, file storage, authentication, quotations, invoices, project portals, payment records, audit logs, analytics and database-backed content management are not connected.

Before launch, implement a server-side application and database, authentication and authorization, row-level access policies, private file storage, validation, spam/rate protection, email delivery, audit logging, backups and deployment configuration. Keep payment instructions private per customer, verify payment receipts manually, and do not enable live gateway collection until merchant eligibility and approval are confirmed. Do not publish personal UPI or bank details. Configure real contact details and legal/tax information only after verification.

## Routes

Navigation uses hash routes so the prototype works when opened as a local file. Examples:

- `#/templates`
- `#/template/NTC-EC-01`
- `#/demo/maison-noire`
- `#/inquiry`
- `#/admin`

The template preview routes are generated from the `templates` catalog in `app.js`. A production deployment should give each preview a server route and its own metadata/canonical URL.

## Brand and business details

NOTTICA is represented as an independent founder-led studio concept based in Kerala, India. The pages do not claim that the business is registered. No client testimonials, awards, client results, payment accounts or contact details have been invented.
