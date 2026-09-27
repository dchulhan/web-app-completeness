# 12 — Cloudflare Workers

Source: https://developers.cloudflare.com/workers/best-practices/workers-best-practices/

## Rules

- CF-W-001 Compatibility date is current and nodejs_compat is on when Node built-ins are used
- CF-W-002 Env types come from wrangler types
- CF-W-003 Secrets are Wrangler secrets, not source
- CF-W-004 Bodies are streamed
- CF-W-005 Bindings beat REST calls to Cloudflare services
- CF-W-006 Background work uses waitUntil, Queues, or Workflows
- CF-W-007 No global mutable request state
- CF-W-008 Logs and traces are enabled before production
- CF-W-009 workers.dev is not the customer origin

## Norm

Keep compatibility_date current. Generate Env with wrangler types. Stream bodies. Isolates are reused so module-level request state leaks. Use bindings, waitUntil, Queues, Workflows. Secrets via wrangler secret put. Enable observability before the first incident. Custom domain for customers.
