# 08 — Functional integrity

## Rules

- FN-001 Every visible control works
- FN-002 Deep links resolve

## Click map

For each route, list every button, link, tab, menu item, and icon control. Mark each as navigate, action, disabled-with-reason, or defect.

Placeholder controls with hover states are defects. "Coming soon" must be labelled as such, not styled as a live primary button.

## Deep links

`/settings/billing` reloads to billing. Shared links open the same record. Back button does not dump the user to a blank home with lost state unless that is the real product model.

PWAs that cannot be indexed or bookmarked per view fail discoverability even when the manifest is valid.

## Secondary paths

Password reset, magic link expiry, email verification, billing return URLs, and OAuth callbacks are part of FN-001. Demo scripts that skip them do not count as a pass.
