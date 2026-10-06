# EVOTAP — Public Resolver Specification

## 1. Canonical Route
`GET /t/[publicCode]`

## 2. Resolution Pipeline
1. **Query Inspection**: Read `publicCode` from route params and `source` query string (`?source=nfc`, `?source=qr`). Default to `UNKNOWN` if missing or invalid.
2. **Tag Verification**: Lookup `NfcTag` by `publicCode`. Confirm status is `ACTIVE`.
3. **Business Verification**: Confirm linked `Business` status is `ACTIVE`.
4. **Destination Lookup**:
   - If `EXTERNAL_URL`: Prepare HTTP 307/302 redirect to `destinationValue`.
   - If `BUSINESS_PAGE`: Prepare rendering/redirect to `/b/[slug]`.
5. **Non-Blocking Analytics**: Execute `recordVisit(...)` using Next.js `after()` API to ensure user navigation is never delayed.
6. **Execution**: Complete redirect or render.

## 3. Neutral Error Handling Strategy
If any of the following conditions occur:
- `publicCode` does not exist in database (`NOT_FOUND`).
- `NfcTag` status is `UNASSIGNED`, `SUSPENDED`, `LOST`, `DAMAGED`, or `RETIRED`.
- Linked `Business` status is `DRAFT`, `SUSPENDED`, or `ARCHIVED`.
- Destination configuration is broken (`MISCONFIGURED`).

**Response Requirement**:
Return **HTTP 404 Not Found** with a generic, unbranded EVOTAP "Resource Unavailable" page.

**Security Requirement**:
The public error message MUST NOT reveal:
- Whether the `publicCode` ever existed.
- Internal database IDs or tenant names.
- The reason for suspension, loss, or decommission.