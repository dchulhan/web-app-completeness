# 07 — Responsive and visual system

## Rules

- VIS-001 Layouts work beyond the author viewport
- VIS-002 Long text and empty data do not break layout
- VIS-003 Design tokens are shared

## Viewports

Test 320, 375, 390, 768, 1024, 1280, 1440. Test landscape phone. Test 200% zoom. Primary CTA must be reachable on a phone without hunting.

If the app only looks finished at the frame it was generated in, it fails VIS-001.

## Stress data

- Names of 40+ characters
- Empty lists
- One item lists
- Error banners plus a full form
- German or Finnish strings if you localise
- `WWWW` and emoji in titles

## Tokens

One file owns:

- space scale (4/8 or 4/6, pick one)
- type scale and line-height
- radius scale (do not mix 6, 8, 12, 16, 9999 at random)
- control heights
- icon optical sizes (16/20/24)
- colour roles, not raw hex in components

Page-local one-offs are how a four-route app looks like four apps.

## Slop tells (visual only)

These are taste signals, not WCAG. They still fail a five-second review:

- purple-to-blue gradient hero with Inter and three equal cards
- gradient-filled headlines
- cards around every element
- emoji used as the icon system
- identical placeholder avatars and identical three-feature rows on every landing page

Fix tokens and composition. Do not add more decoration.
