# Cloudflare checklist

Use with `checklists/pre-launch.md`.

## DNS

- [ ] Zone is full setup with Cloudflare nameservers (or a documented partial setup)
- [ ] HTTP hostnames that should use WAF/TLS are proxied
- [ ] Mail and verification records are DNS-only
- [ ] No hostname mixes proxied and DNS-only records
- [ ] Apex and www redirect to one canonical host
- [ ] DNSSEC matches the current nameservers

## Mail

- [ ] MX matches the provider
- [ ] Mail A/AAAA is DNS-only if present
- [ ] Single SPF TXT
- [ ] DKIM selector present for each sender
- [ ] DMARC present; plan exists to leave `p=none`
- [ ] Non-sending domains have deny-all SPF and reject DMARC

## Workers

- [ ] `compatibility_date` is recent
- [ ] `wrangler types` is in the workflow
- [ ] Secrets are not in git
- [ ] No unbounded `arrayBuffer()` on user input
- [ ] No module-level request state
- [ ] Observability enabled
- [ ] Customer traffic is not on `workers.dev`

## Pages

- [ ] Custom domain on production
- [ ] Preview `curl -sI` shows `x-robots-tag: noindex`
- [ ] Previews behind Access if the content is private
- [ ] `pages.dev` production host redirects to the custom domain
- [ ] No cache-everything rule on HTML
- [ ] `_headers` and `_redirects` reviewed
