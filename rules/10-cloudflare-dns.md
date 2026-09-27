# 10 — Cloudflare DNS

Sources: https://developers.cloudflare.com/dns/get-started/
Record types: https://developers.cloudflare.com/dns/manage-dns-records/reference/dns-record-types/

## Rules

- CF-DNS-001 Full setup uses Cloudflare nameservers
- CF-DNS-002 HTTP records that should be protected are proxied
- CF-DNS-003 Non-HTTP records stay DNS-only
- CF-DNS-004 Do not mix proxied and DNS-only on the same hostname
- CF-DNS-005 DNSSEC is planned around nameserver changes
- CF-DNS-006 Apex and www have one canonical target

## Norm

Full setup makes Cloudflare authoritative. Import records, then change nameservers at the registrar. Turn DNSSEC off at the registrar before that change, then enable Cloudflare DNSSEC after the zone is live.

Proxy status (orange cloud) applies to A, AAAA, and CNAME used for HTTP/S. Proxied hostnames get Cloudflare IPs, TLS, WAF, and cache. They do not accept arbitrary TCP ports.

DNS-only (grey cloud) is required for mail A/AAAA and MX targets, SPF/DKIM/DMARC TXT, many third-party verifications, and services that must see the origin IP.

Do not attach both proxied and DNS-only records to one hostname.
