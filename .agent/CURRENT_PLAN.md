# Current Active Plan: Phase 1 — Database & Core Schema

## Goal
Implement the core EVOTAP domain schema in `packages/database/prisma/schema.prisma` using Prisma 7, establishing multi-tenant isolation rules, core enums, entities, relations, and indexes without connecting or deploying to production.

## Task Breakdown
1. Create `packages/database/prisma/schema.prisma`.
2. Define Datasource (PostgreSQL referencing `DATABASE_URL` and `DIRECT_URL`).
3. Implement Enums: `BusinessStatus`, `NfcTagStatus`, `DestinationType`, `VisitSource`, `UserRole`, `TemplateKey`.
4. Implement Entities: `Business`, `NfcBatch`, `NfcTag`, `Link`, `TemplateConfig`, `Visit`, `User`, `AuditLog`.
5. Apply unique constraints and indexes defined in `docs/03-DOMAIN-MODEL.md`.
6. Export generated client and helpers via `packages/database/src/index.ts`.
7. Validate schema with `pnpm --filter @evotap/database exec prisma validate`.
8. Verify workspace build and typecheck.

## Status
- **State**: Pending Execution
- **Next Action**: Run Phase 1 prompt with Codex.