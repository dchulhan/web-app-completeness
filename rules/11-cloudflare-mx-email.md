# 11 — Cloudflare MX and email authentication

Sources:
- https://developers.cloudflare.com/dns/manage-dns-records/how-to/email-records/
- https://developers.cloudflare.com/dns/troubleshooting/email-issues/
- https://developers.cloudflare.com/dmarc-management/security-records/

## Rules

- CF-MX-001 MX targets are DNS-only
- CF-MX-002 Mail host A/AAAA is DNS-only
- CF-MX-003 SPF exists and lists only real senders
- CF-MX-004 DKIM exists for every sending platform
- CF-MX-005 DMARC exists and is not left at p=none forever
- CF-MX-006 Domains that do not send mail publish a restrictive policy

## Norm

Cloudflare does not proxy SMTP on port 25 through the orange cloud. Mail hostnames and MX records stay DNS-only.

Setup: DNS-only A/AAAA for mail if you run it, MX from the provider, one SPF TXT, DKIM per sender, DMARC starting at p=none with rua then quarantine then reject. Non-sending domains get v=spf1 -all and reject DMARC.
