# For humans

This repo is meant to be read in small passes, not cover to cover.

## If you have ten minutes

Read `checklists/five-second-slop-test.md`. Open the production URL on a phone. That is the whole point.

## If you have an hour

1. `docs/WHY.md` so the scope is clear.
2. `checklists/pre-launch.md`.
3. `rules/01` through `04` if any box failed.

## If you own DNS

`rules/10-cloudflare-dns.md` and `rules/11-cloudflare-mx-email.md`. Mail records are DNS-only. That single fact prevents most outages.

## If you deploy to Cloudflare

`rules/12-cloudflare-workers.md` and `rules/13-cloudflare-pages.md`. Preview URLs stay `noindex`. Production is a custom domain.

## If you are writing words

`style/README.md` tells you which guide wins. This catalogue's own prose follows Google's developer documentation highlights with Queen's English spelling. Product UI on iOS follows Apple.

## How rules are numbered

Each rule has an id you can paste into a ticket (`META-001`). Severity is on the rule, not on your opinion of the page. If you think a blocker is wrong, open a change against `RULES.yaml` and cite a first-party source.
