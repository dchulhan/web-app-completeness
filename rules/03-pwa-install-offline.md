# 03 — PWA installability and offline

## Rules

- PWA-001 Valid web app manifest
- PWA-002 Service worker with fetch handler
- PWA-003 Custom offline fallback
- PWA-004 App shell available offline
- PWA-005 Cache versioning
- PWA-006 Install and permission prompts are contextual

## Core bar (web.dev)

Starts fast. Works in any browser. Fits any screen. Serves a custom offline page. Is installable.

## Chromium installability (practical)

Secure context. Manifest linked and valid. `name` or `short_name`. `start_url`. `display` of `standalone`, `fullscreen`, or `minimal-ui`. Icons including 192 and 512. Service worker with a `fetch` handler. Prefer a maskable icon so Android does not pad your mark with white.

iOS Safari does not use `beforeinstallprompt`. Detect `display-mode: standalone`. If the user is on iOS and not standalone, show a short, dismissible hint that uses the Share control.

## Offline

Minimum: branded offline document for failed navigations.

Better: shell and primary read paths work offline. Write paths queue and sync.

Cache policy by class:

| Class | Strategy |
| --- | --- |
| Hashed shell (JS, CSS, logo) | Cache-first |
| HTML documents | Network, fallback to cache or offline page |
| API data | Network-first or stale-while-revalidate |
| User-specific or sensitive | Do not precache in a shared cache |

Name caches with the release id. On `activate`, delete every cache that is not in the current allow-list.

## Permissions

Never request notification or location on first paint. Ask next to the feature that needs it, with one sentence of why.
