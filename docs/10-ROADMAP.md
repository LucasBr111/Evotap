# EVOTAP — Execution Roadmap

- **Phase 0 — Repository Foundation**: Monorepo setup with `pnpm`, Turborepo, Next.js App Router, Tailwind, ESLint, TypeScript strict mode, and base workspace structure.
- **Phase 1 — Database & Core Schema**: Prisma 7 configuration, Supabase PostgreSQL connection, migration setup, and base schema implementation.
- **Phase 2 — Domain Layer & Tenant Isolation**: `@evotap/domain` setup, tenant context helpers, and cross-tenant unit/integration tests.
- **Phase 3 — Internal Auth & Admin Base**: Internal user authentication, role-based access control (`SUPER_ADMIN`, `OPERATOR`, `SUPPORT`), and `/admin` layout.
- **Phase 4 — NFC Hardware & Inventory Domain**: Batch creation, hardware stock management, `publicCode` generation, and lifecycle transition services.
- **Phase 5 — Resolver Core**: Public route `/t/[publicCode]`, status checks, Next.js `after()` visit logging, and neutral 404 error rendering.
- **Phase 6 — Review Product Milestone**: Complete end-to-end delivery of NFC scan -> Resolver -> Google Reviews external redirect with non-blocking analytics logging.
- **Phase 7 — Business Pages & Template Rendering**: Public page route `/b/[slug]`, Zod schema validation for `GENERAL`, `FOOD`, and `HEALTH` templates, and UI component rendering.
- **Phase 8 — Advanced Analytics & Link Metrics**: Aggregated scan dashboards for operators, link-click event tracking design, and reporting filters.
- **Phase 9 — Web NFC Modules**: Dynamic catalog/menu modules, expanded gallery sections, and rich interactive components for Web NFC tier businesses.
- **Phase 10 — Production Hardening & Launch**: End-to-end automated test suites, Sentry error monitoring, Cloudflare security rules, and production deployment.