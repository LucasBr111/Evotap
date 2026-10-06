# EVOTAP — MVP Scope & Boundaries

## 1. In Scope (MVP)
- **Public Resolver (`/t/[publicCode]`)**: High-speed lookup, status validation, destination routing, and non-blocking visit logging.
- **Business Pages (`/b/[slug]`)**: Template-driven dynamic web pages with Zod-validated configurations.
- **Internal Admin (`/admin`)**: Operations portal for EVOTAP staff (`SUPER_ADMIN`, `OPERATOR`, `SUPPORT`).
- **NFC Lifecycle Management**: Hardware stock tracking, batch creation, tag assignment, and status transitions.
- **Multi-Tenant Architecture**: Logical isolation using `businessId` in domain/service/repository layers.
- **Privacy-Preserving Analytics**: Scan/visit logging tracking business, tag ID, source (`NFC`, `QR`, `UNKNOWN`), and timestamp. No PII stored.
- **Audit Logging**: Immutable tracking of sensitive administrative operations.

## 2. Explicitly Out of Scope (OUT OF MVP)
- **Client Self-Service Portal**: No client authentication, dashboard, or client-managed settings.
- **Client Roles**: No `BUSINESS_OWNER` or `BUSINESS_STAFF` roles.
- **Payment & Subscriptions**: No automated billing, Stripe integration, or `Plan`/`Subscription` tables.
- **Visitor PII Tracking**: No IP hashing, User-Agent logging, device fingerprinting, or tracking cookies.
- **Microservices & Background Queues**: No Redis, RabbitMQ, BullMQ, or async message brokers.
- **Self-Service Tag Reassignment**: Clients cannot transfer tags between businesses.