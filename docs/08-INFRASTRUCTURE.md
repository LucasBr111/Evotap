
---

# `docs/08-INFRASTRUCTURE.md`

```markdown
# EVOTAP — Infrastructure, Environments & Deployment

> Status: MVP INFRASTRUCTURE BASELINE
>
> The goal of the MVP infrastructure is operational simplicity, safe environment
> separation, low initial cost, and a clear path to production without introducing
> unnecessary infrastructure.

---

# 1. Infrastructure Principles

EVOTAP infrastructure should optimize for:

1. low operational overhead;
2. production reliability;
3. environment isolation;
4. secure secret management;
5. observable failures;
6. predictable deployment;
7. minimal infrastructure complexity.

Do NOT introduce infrastructure solely for hypothetical future scale.

EVOTAP MVP does NOT require:

- Kubernetes;
- Docker orchestration;
- Redis;
- Kafka;
- RabbitMQ;
- BullMQ;
- dedicated microservices;
- dedicated CDN infrastructure beyond the selected providers;
- self-managed PostgreSQL servers.

---

# 2. Core Providers

## Application Hosting

**Provider:** Vercel

Responsibilities:

- Next.js deployment;
- server execution;
- edge delivery;
- preview deployments;
- environment variables;
- deployment integration with GitHub.

---

## Database

**Provider:** Supabase PostgreSQL

Responsibilities:

- managed PostgreSQL;
- database availability;
- provider-managed backups according to the active Supabase plan;
- database connection infrastructure.

EVOTAP does not self-host PostgreSQL during MVP.

---

## Object Storage

**Provider:** Supabase Storage

Initial use cases:

- Business logos;
- Business Page images;
- Web NFC gallery assets;
- catalog/menu media where applicable.

Do NOT introduce UploadThing, S3, Cloudinary, or another storage provider unless a later requirement justifies it.

---

## DNS & Edge Security

**Provider:** Cloudflare

Responsibilities:

- DNS;
- edge-level security configuration;
- domain management integration;
- appropriate caching/security rules where applicable.

Cloudflare must not cache dynamic Resolver responses in a way that causes stale NFC destinations.

---

## Error Monitoring

**Provider:** Sentry

Responsibilities:

- application exceptions;
- server-side errors;
- relevant production diagnostics.

Sensitive tenant information and secrets must not be intentionally included in error metadata.

---

## Availability Monitoring

**Provider:** UptimeRobot or equivalent simple uptime monitoring service.

Initial monitored targets should include:

```text
main application
public Resolver availability