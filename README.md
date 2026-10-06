<div align="center">

# ⚡ EVOTAP

**Plataforma SaaS modular y multi-tenant para la resolución de experiencias digitales mediante NFC y QR.**

[![Next.js](https://img.shields.io/badge/Next.js-16+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7.10-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-ef4444?style=for-the-badge&logo=turborepo)](https://turbo.build/)
[![pnpm](https://img.shields.io/badge/pnpm-Workspaces-f69220?style=for-the-badge&logo=pnpm)](https://pnpm.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

[Documentación Architecture](./docs/02-ARCHITECTURE.md) · [Roadmap](./docs/10-ROADMAP.md) · [Reportar Bug](../../issues)

</div>

---

## 📌 Visión del Proyecto

EVOTAP conecta elementos físicos (tags NFC y códigos QR) con experiencias digitales dinámicas y configurables, garantizando resoluciones de ultra baja latencia, privacidad nativa para el usuario final y gestión multi-inquilino (_multi-tenant_).

## 🛠️ Arquitectura Monorepo

```text
evotap/
├── apps/
│   └── web/              # Next.js 16 App Router (/t/, /b/, /admin)
├── packages/
│   ├── config/           # Configuraciones compartidas (ESLint, TSConfig)
│   ├── database/         # Esquema Prisma 7, cliente y repositorios
│   ├── domain/           # Reglas puras de negocio y esquemas Zod
│   └── ui/               # Componentes UI reutilizables
└── docs/                 # Especificaciones técnicas y decisiones ADR
```

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
