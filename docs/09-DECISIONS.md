


---

# `docs/09-DECISIONS.md`

```markdown
# EVOTAP — Architectural Decision Records

> This file records architectural and technical decisions that AI agents and
> developers MUST treat as project constraints.
>
> A decision documented here must not be silently changed during implementation.
>
> If implementation reveals a reason to reconsider an ADR:
>
> 1. stop;
> 2. document the conflict;
> 3. propose alternatives;
> 4. request explicit approval;
> 5. update this document after approval.

---

# ADR-001 — Modular Monolith Architecture

**Status:** ACCEPTED

## Decision

EVOTAP will be implemented as a Modular Monolith.

The application will use:

```text
pnpm workspaces
Turborepo
Next.js
TypeScript
PostgreSQL