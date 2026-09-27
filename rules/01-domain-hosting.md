# 01 — Domain and hosting

## Rules

- HOST-001 Production traffic uses a custom domain
- HOST-002 Preview and staging are noindex
- HOST-003 HTTPS only, no mixed content
- HOST-004 One canonical host

## Norm

`*.vercel.app`, `*.netlify.app`, `*.pages.dev`, and similar hosts are collaboration URLs. They are not a product origin. Share previews internally. Put customers on a domain you control.

Vercel preview deployments send `X-Robots-Tag: noindex` on the platform hostname. That header is omitted when a custom domain is attached to a non-production branch. Staging on `staging.example.com` will be indexed unless you set `noindex` yourself.

Canonicals must point at the production HTTPS origin, never at a preview URL. Serving the same document on apex and `www` without a 301 splits the crawl.

## Checks

```bash
curl -sI https://your-app.vercel.app | grep -i 'x-robots-tag'
curl -sI https://staging.example.com | grep -i 'x-robots-tag'
curl -sI http://example.com | grep -i location
```

Inspect the live document origin in the address bar. If it is a default platform domain, HOST-001 fails.

## Fix pattern (Next.js)

Send `noindex` when `VERCEL_ENV === 'preview'`. Always emit `<link rel="canonical" href="https://example.com{pathname}">`.
