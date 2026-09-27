# 13 — Cloudflare Pages

Sources:
- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://developers.cloudflare.com/pages/configuration/preview-deployments/
- https://developers.cloudflare.com/pages/configuration/serving-pages/

## Rules

- CF-P-001 Production is a custom domain, not the apex pages.dev hostname
- CF-P-002 Preview deployments stay noindex and preferably access-controlled
- CF-P-003 Do not add cache rules that freeze Pages assets across deploys
- CF-P-004 _headers and _redirects are intentional
- CF-P-005 Production branch is explicit

## Norm

Customers use a custom domain. Previews send X-Robots-Tag: noindex. Protect private previews with Access. Redirect production pages.dev to the custom domain. Do not add cache-everything on HTML. Pages already caches until the next deploy.
