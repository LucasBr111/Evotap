# EVOTAP — AI Agent Master Execution Plan

## Operational Mandates
1. Never alter documented architecture without explicit user approval.
2. Maintain strict layer boundaries (`apps/web` -> `@evotap/domain` -> `@evotap/database`).
3. Execute single-phase work units and demand verification before proceeding.

## Sequential Milestones
- [x] **Phase 0**: Monorepo foundation setup (pnpm + Turborepo + Next.js App Router + TypeScript strict).
- [ ] **Phase 1**: Database setup (Prisma 7 + Supabase PostgreSQL schema + migrations).
- [ ] **Phase 2**: Tenant isolation & domain rules (@evotap/domain).
- [ ] **Phase 3**: Authentication & internal admin (/admin).
- [ ] **Phase 4**: Hardware lifecycle domain (batches, tags, codes).
- [ ] **Phase 5**: Core public resolver (/t/[publicCode]).
- [ ] **Phase 6**: Review product E2E validation.
- [ ] **Phase 7**: Business pages & templates.
- [ ] **Phase 8**: Analytics dashboard & link tracking.
- [ ] **Phase 9**: Web NFC modules.
- [ ] **Phase 10**: Production launch readiness.