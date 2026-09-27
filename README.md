# Web App Completeness

Production rules for PWAs and mobile web apps.

This repository is a gate. It exists so a build that works on one laptop is not mistaken for a product. Humans tick checklists. Agents load `RULES.yaml` and `AGENTS.md`. Both use the same ids.

## Start here

| You are | Open |
| --- | --- |
| Human, ten minutes | [checklists/five-second-slop-test.md](checklists/five-second-slop-test.md) |
| Human, shipping | [docs/FOR-HUMANS.md](docs/FOR-HUMANS.md) then [checklists/pre-launch.md](checklists/pre-launch.md) |
| Human on Cloudflare | [checklists/cloudflare.md](checklists/cloudflare.md) |
| Agent | [AGENTS.md](AGENTS.md) then [RULES.yaml](RULES.yaml) |
| Writing words | [style/README.md](style/README.md) |
| Asking why | [docs/WHY.md](docs/WHY.md) |

## What this covers

1. Domain and hosting
2. Metadata, SEO, and social previews
3. PWA installability and offline behaviour
4. UX states (404, loading, empty, error)
5. Accessibility
6. Engineering hygiene
7. Responsive and visual consistency
8. Functional integrity
9. Legal floor
10. Cloudflare DNS, MX, Workers, Pages
11. Web, Google, and Apple style guides

## Severity

- `blocker`: do not ship
- `major`: ship only with a named waiver
- `minor`: track

## Audit order

Host and secrets first. Taste last.

1. Production host and `noindex` on previews
2. Cloudflare DNS and mail proxy status
3. Secrets and console hygiene
4. Per-route metadata
5. 404, offline, loading, empty, error
6. Heading outline and image `alt`
7. Manifest, service worker, offline fallback
8. Viewport matrix and token drift
9. Click every control
10. Lighthouse gates

## Layout

```
AGENTS.md       Agent contract
llms.txt        Machine index
docs/           Why and how
rules/          Normative prose
style/          Which writing guide wins
checklists/     Human tick lists
templates/      Copy-paste artefacts
audit/          Procedure and worksheets
RULES.yaml      Canonical ids
references.md   First-party sources
```

## Licence

MIT. See [LICENSE](LICENSE).
