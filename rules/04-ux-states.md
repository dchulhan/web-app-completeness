# 04 — UX states

## Rules

- UX-001 Custom 404
- UX-002 Loading states reserve space
- UX-003 Empty states have a next action
- UX-004 Useful error messages
- UX-005 Form errors are local

## Norm

These pages are the product. Generators skip them because the happy path screenshots well.

### 404

HTTP 404. Brand chrome. Short explanation. Search or home. SPA routers that render a 404 view under HTTP 200 harm SEO and caches.

### Loading

Skeletons with reserved height and width. Prefer content-shaped placeholders over a centred spinner that runs until timeout. If a request can hang, show a retry after a budget (for example 8 seconds).

### Empty

State the condition in plain language. Offer one action: create, import, change filter, or clear search. Do not show a table header with zero rows and no copy.

### Error

User-facing sentence + recovery. Examples:

- "We could not reach the server. Try again."
- "That link has expired. Request a new one."
- "You do not have access to this workspace."

Log the exception id. Show the id to support, not a stack trace.

### Forms

Validate on submit and on blur. Announce errors to assistive tech. Do not clear the form on a 422.
