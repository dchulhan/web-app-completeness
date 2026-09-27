# 09 — Legal and compliance floor

## Rules

- LEGAL-001 Privacy and terms are reachable
- LEGAL-002 Auth and tenancy boundaries

This section is a floor, not counsel. Jurisdiction changes the details.

## Documents

If you create accounts, store personal data, or drop trackers, publish a privacy policy and terms. Link them in the footer and in account deletion or export flows. Cookie or analytics banners must match the scripts you actually load.

## Boundaries

Before launch:

1. Visit an authenticated URL while logged out. Expect a login, not the document.
2. Create two tenants. Confirm IDs from A do not resolve for B.
3. Confirm password reset does not disclose whether an email exists, or accept that disclosure as a known product choice.

IDOR and open list endpoints are launch blockers even when the UI looks finished.
