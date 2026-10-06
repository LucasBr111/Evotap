# EVOTAP — System Architecture

## 1. Architectural Style
EVOTAP is built as a **Modular Monolith** inside a `pnpm` workspace managed by **Turborepo**.

- **App Router**: Next.js single-app layout handling public resolution (`/t/`), public render (`/b/`), and internal admin (`/admin`).
- **Domain Decoupling**: Business logic and lifecycle invariants reside in `@evotap/domain`.
- **Database Boundary**: Data access is strictly encapsulated within `@evotap/database`. Client components must NEVER access Prisma directly.

## 2. Monorepo Layout
```text
apps/
  web/               # Next.js 15+ App Router (UI routes, Server Actions, Route Handlers)

packages/
  database/          # Prisma 7 schema, migrations, DB client, infrastructure helpers
  domain/            # Business logic, lifecycle policies, tenant isolation, Zod validation
  ui/                # Shared UI primitives (Tailwind-styled components)
  config/            # Shared TypeScript, ESLint, and environment configurations