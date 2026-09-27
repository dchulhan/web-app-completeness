# Web App Completeness

Production rules for PWAs and mobile web apps.

This repository is a gate, not a style guide. It exists so a build that "works on my laptop" cannot be mistaken for a product. Use it before launch, during review, and as the contract an agent or junior must satisfy.

## What this covers

1. Domain and hosting (no preview host in production)
2. Metadata, SEO, and social previews
3. PWA installability and offline behaviour
4. Boring UX states (404, loading, empty, error)
5. Accessibility structure
6. Engineering hygiene
7. Responsive and visual consistency
8. Functional integrity (every control works)
9. Legal and compliance floor

Canonical sources: [web.dev PWA checklist](https://web.dev/articles/pwa-checklist), [MDN PWA best practices](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Best_practices), WCAG 2.2 AA, Core Web Vitals.

## How to use

| Audience | Start here |
| --- | --- |
| Shipping today | [checklists/pre-launch.md](checklists/pre-launch.md) |
| Five-second slop test | [checklists/five-second-slop-test.md](checklists/five-second-slop-test.md) |
| Agent or auditor | [RULES.yaml](RULES.yaml) then [audit/AUDIT.md](audit/AUDIT.md) |
| Implementing a page | [templates/](templates/) |
| Understanding *why* | [rules/](rules/) |

Severity in `RULES.yaml`:

- `blocker`: do not ship
- `major`: ship only with an explicit waiver
- `minor`: track and fix in the next pass

## Audit order

Do not start with colour. Start with host, secrets, and whether the primary CTA works.

1. Production host and `noindex` on previews
2. Secrets and console hygiene
3. Per-route title, description, canonical, OG, favicon
4. 404, offline, loading, empty, error
5. Heading outline and image `alt`
6. Manifest + service worker + offline fallback
7. Viewport matrix and token drift
8. Click every control
9. Lighthouse PWA / a11y / SEO / CWV gates

## Layout

```
rules/          Normative prose per area
checklists/     Human-run gates
templates/      Copy-paste heads, manifest, SW, headers
audit/          Procedure, route sheet, viewport matrix
RULES.yaml      Machine-readable rule catalogue
```

## Licence

MIT. See [LICENSE](LICENSE).
