# EVOTAP — NFC Lifecycle Policy

## 1. Lifecycle States
- **`UNASSIGNED`**: Physical tag created in inventory (`batchId` set, `businessId = null`). Cannot resolve publicly.
- **`ASSIGNED`**: Tag linked to a `Business`, destination configured, awaiting final deployment or activation.
- **`ACTIVE`**: Fully operational tag. Resolves to destination on public access.
- **`SUSPENDED`**: Temporarily disabled (e.g., billing dispute, administrative hold). Resolves to public neutral 404.
- **`LOST`**: Physical tag reported lost. Disabled permanently.
- **`DAMAGED`**: Physical tag physically broken/malfunctioning. Disabled permanently.
- **`RETIRED`**: Decommissioned tag. Disabled permanently.

## 2. Public Code Rules
- Generated using high-entropy cryptographically secure random generators.
- Non-sequential, unique, and immutable.
- Discoupled from internal database UUIDs.
- **Never Reused**: Even if a physical tag is retired, lost, or damaged, its `publicCode` is NEVER assigned to another physical device.

## 3. Reassignment & Replacement Policy
- Reassigning an existing tag to a new `Business` unlinks all previous owner associations in active memory.
- Analytics history remains internally queryable by EVOTAP operators but is strictly isolated from the new business owner.
- Physical tag replacement requires creating a new physical record with a brand-new `publicCode`.