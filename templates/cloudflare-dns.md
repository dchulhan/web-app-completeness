# Example DNS map

Replace example.com. Proxied means orange cloud.

| Type | Name | Content | Proxy | Notes |
| --- | --- | --- | --- | --- |
| A | @ | origin or Pages target via CNAME flattening | Proxied | HTTP apex |
| CNAME | www | example.com | Proxied | Canonicalise in a redirect rule |
| CNAME | app | project.pages.dev | Proxied | Pages custom domain, usually auto-added |
| MX | @ | smtp.provider.example | DNS only | Provider priority |
| A | mail | 192.0.2.1 | DNS only | Only if you run the MTA |
| TXT | @ | v=spf1 include:provider ~all | DNS only | One SPF only |
| TXT | selector._domainkey | v=DKIM1; k=rsa; p=... | DNS only | Provider selector |
| TXT | _dmarc | v=DMARC1; p=quarantine; rua=mailto:dmarc@example.com | DNS only | Raise policy after reports |
| TXT | @ | host-verification-token | DNS only | Third parties |
