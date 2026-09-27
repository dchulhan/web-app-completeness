# 06 — Engineering hygiene

## Rules

- ENG-001 No secrets in the client
- ENG-002 Production console is clean
- ENG-003 Development artefacts are not public
- ENG-004 JavaScript budget
- ENG-005 Core Web Vitals gates
- ENG-006 Content-Security-Policy exists

## Secrets

Open the deployed JS and search for `sk_`, `secret`, `service_role`, `BEGIN PRIVATE`, `postgres://`. Public anon keys are acceptable when row policies exist. Service-role keys are not. Rotate on exposure.

## Console and artefacts

Production builds drop debug logs. Failed favicon, font, and source-map requests count. Do not publish `.env`, internal READMEs, or the contents of `.git`.

## Budget

Set a first-load JS budget in CI (choose a number the team can defend, then keep it). Route-level splitting is expected. A single multi-megabyte vendor file on the marketing home page is a major.

## Vitals

| Metric | Gate |
| --- | --- |
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| TTFB | < 800ms |

Measure on a mid-range mobile profile, not only desktop Lighthouse.

## CSP

Send `Content-Security-Policy`. Prefer nonces or hashes over `unsafe-inline`. Start with report-only if the app is already live, then enforce.
