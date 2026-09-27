# 00 — Principles

A complete web app is judged in five seconds by host, title, preview card, and whether the first button works. Everything else is confirmation.

## Order of work

1. Make the plain web app correct: real URLs, real titles, real errors.
2. Make it fast enough to install: Core Web Vitals on a mid-range phone.
3. Add the manifest and icons.
4. Add the service worker and offline fallback.
5. Add install UX after a value moment.
6. Add push or background sync only if the product needs them.

Starting at the service worker on a slow, untitled SPA is how slop ships.

## Progressive enhancement

Core tasks work as HTML. Script improves them. Feature-detect, do not UA-sniff. A PWA that only works in the author's Chrome profile is a website with extra files.

## One source of truth

Route table drives:

- titles and descriptions
- canonicals
- sitemap
- OG images
- audit sheet in `audit/route-meta.csv`

If metadata is hand-edited per page with no table, it will drift.

## Severity

Blockers stop the release. Majors need a named waiver. Minors go on the next ticket. Do not reclassify a missing custom domain as a minor.
