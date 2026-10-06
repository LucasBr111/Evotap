# EVOTAP — Multitenancy & Authentication Policy

## 1. Multitenancy
- **Tenant Root**: `Business`.
- **Isolation Scope**: Every tenant resource (`NfcTag` when assigned, `Link`, `TemplateConfig`, `Visit`) MUST include `businessId`.
- **Enforcement Layer**: Tenant access checks must occur strictly inside server domain services and repository functions.
- **UI Independence**: UI components must never be relied upon for tenant filtering or security boundary enforcement.
- **Cross-Tenant Guardrail**: Automated test suites must actively verify that query contexts under Tenant A cannot read or write resources of Tenant B.

## 2. Authentication & Authorization (MVP)
- **Target Audience**: Internal EVOTAP employees only. No client access.
- **Roles**:
  - `SUPER_ADMIN`: Full access to all administrative actions, users, and global parameters.
  - `OPERATOR`: Access to provision inventory, manage businesses, assign tags, and edit page templates.
  - `SUPPORT`: Read-only access to inspect tag status, business profiles, and audit logs for customer troubleshooting.