# EVOTAP — Analytics Policy & Design

## 1. Privacy First Strategy
To guarantee complete user privacy, compliance, and zero tracking friction:
- **No PII Stored**: No IP addresses, raw IP hashes, User-Agent strings, or device fingerprints.
- **No Tracking Cookies**: Visits are completely stateless scan events.

## 2. Scan / Visit Schema
Scans are recorded in the `visits` table:
```typescript
interface VisitRecord {
  businessId: string;
  nfcTagId: string | null;
  source: 'NFC' | 'QR' | 'UNKNOWN';
  occurredAt: Date;
}