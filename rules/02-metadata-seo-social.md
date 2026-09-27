# 02 — Metadata, SEO, and social preview

## Rules

- META-001 Unique title per indexable URL
- META-002 Unique meta description per indexable URL
- META-003 Self-referencing canonical
- META-004 Favicon set is complete
- META-005 Open Graph and social preview
- META-006 robots.txt and sitemap are intentional
- META-007 Structured data where it earns rich results

## Norm

Search and messengers never look at the React tree. They look at the document head and a few well-known files.

| Field | Role | Practical limit |
| --- | --- | --- |
| `title` | SERP headline and tab | ~50-60 characters / ~600px |
| `meta name=description` | SERP snippet, CTR not rank | ~155-160 characters |
| `link rel=canonical` | De-dupe | Absolute HTTPS URL |
| `og:*` | Facebook, LinkedIn, Slack, iMessage, Discord | Image 1200x630 |
| `twitter:card` | X preview layout | `summary_large_image` when you have art |

A site-wide identical title is a defect. A missing OG image is a defect. A sitemap that lists preview URLs is a defect.

Client-side-only rendering is allowed only if the crawler still receives the title, description, and primary content for each URL. If it does not, add hybrid or server rendering for public routes.

## Favicon set

- `/favicon.ico` at the site root (legacy and some crawlers)
- SVG or 32/48 PNG via `rel=icon`
- `apple-touch-icon` 180x180
- Manifest icons 192 and 512, plus maskable

## Checks

Fill `audit/route-meta.csv` for every public route. View source, do not trust the SPA after hydration only. Fetch `robots.txt` and `sitemap.xml`. Paste a production URL into a social debugger.
