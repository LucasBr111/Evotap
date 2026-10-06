# EVOTAP

Phase 0 repository foundation: pnpm workspaces, Turborepo, Next.js App Router, and strict TypeScript.

## Development

Use Node.js 22.12+ and pnpm 11.5.2. Run `pnpm install`, then `pnpm dev`.

Root commands: `pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm format`.
The test task is reserved for subsequent phases; no business test suites exist yet.
Copy `.env.example` to `apps/web/.env.local` when environment values are needed. Phase 0 needs no database connection.

## Boundaries

`apps/web -> @evotap/domain -> @evotap/database`. Shared UI has no persistence access.
ESLint blocks direct Prisma/database imports in web and UI. Domain pure rules must remain independent of infrastructure; later server services encapsulate repository calls.

Prisma CLI and client are pinned to matching 7.x versions. Schema, generation, adapters, migrations, and database connectivity belong to Phase 1.
Public route placeholders fail closed. The admin placeholder exposes no operations or tenant data; internal authentication belongs to Phase 3. There is no client dashboard or self-service authentication.

All available `docs/` files were read before implementation. The requested `.agent/CURRENT_PLAN.md` was absent. Several baseline documents end mid-section; Phase 0 follows the roadmap and explicit task requirements.
