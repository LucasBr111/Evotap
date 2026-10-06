# EVOTAP — Domain Model & Database Schema

> Status: BASELINE APPROVED FOR MVP
>
> This document defines the conceptual persistence model for EVOTAP.
> Prisma implementation must follow these domain rules unless a later ADR
> explicitly changes them.

---

## 1. General Modeling Rules

EVOTAP uses PostgreSQL with Prisma ORM.

### Internal identifiers

All core entities use UUIDs as internal primary keys unless explicitly documented otherwise.

Internal UUIDs:

- are implementation identifiers;
- must never be used as public NFC identifiers;
- must never be exposed in `/t/[publicCode]` URLs.

### Tenant ownership

`Business` is the tenant root.

Tenant-owned entities MUST reference `businessId`.

Exception:

`NfcTag.businessId` may be `NULL` while the physical tag is unassigned inventory.

### Lifecycle over deletion

Business and NFC lifecycle must be represented through explicit status fields.

Do NOT use destructive deletion or generic soft-delete flags as a replacement for domain lifecycle states.

---

# 2. Core Entities

## 2.1 Business

Represents a client business and acts as the EVOTAP tenant root.

### Fields

- `id`: UUID — Primary key.
- `slug`: String — UNIQUE.
- `name`: String.
- `status`: `BusinessStatus`.
- `templateKey`: `TemplateKey?`.
- `createdAt`: DateTime.
- `updatedAt`: DateTime.

### BusinessStatus

```text
DRAFT
ACTIVE
SUSPENDED
ARCHIVED