# AGENTS.md

Read this file first if you are an agent.

## What this repository is

A production-completeness catalogue for PWAs and mobile web apps. It is a gate, not a framework and not a design system. Humans use the checklists. Agents use `RULES.yaml` plus this file.

## What you must not do

- Do not invent rules that contradict `RULES.yaml`.
- Do not weaken a `blocker` to make a generated app pass.
- Do not copy first-party vendor docs wholesale. Link them. Summarise the norm.
- Do not treat `*.pages.dev`, `*.workers.dev`, or `*.vercel.app` as a production origin.
- Do not proxy MX, mail A/AAAA, or SPF/DKIM/DMARC targets through Cloudflare orange-cloud.

## Source order

When sources disagree, apply this order:

1. This repo's `RULES.yaml` for ship / no-ship decisions on an app we are auditing.
2. First-party vendor docs linked from `references.md` (Cloudflare, Google, Apple, web.dev, MDN, WCAG).
3. `rules/*.md` and `style/*.md` for rationale and examples.
4. Project-local exceptions recorded as a named waiver.

## How to audit

1. Open `audit/AUDIT.md`.
2. Score every applicable id in `RULES.yaml`.
3. Emit a table: `Rule | Severity | Result | Evidence`.
4. Stop a launch if any `blocker` is `FAIL`.
5. Fix in the order listed in `README.md` (host and secrets first).

## File map

| Path | Audience | Purpose |
| --- | --- | --- |
| `RULES.yaml` | agent + human | Canonical rule catalogue |
| `AGENTS.md` | agent | Operating contract |
| `docs/WHY.md` | both | Intent and scope |
| `docs/HOW-TO-USE.md` | both | Workflow |
| `docs/FOR-HUMANS.md` | human | How to read this repo |
| `llms.txt` | agent | Machine index of pages |
| `rules/` | both | Normative prose per area |
| `style/` | both | Writing and UI language rules |
| `checklists/` | human | Tick lists |
| `templates/` | both | Copy-paste artefacts |
| `audit/` | both | Procedure and worksheets |
| `references.md` | both | First-party URLs only |

## Rule id prefixes

- `HOST-*` hosting and indexation
- `META-*` SEO and social
- `PWA-*` install and offline
- `UX-*` product states
- `A11Y-*` accessibility
- `ENG-*` engineering hygiene
- `VIS-*` visual system
- `FN-*` functional integrity
- `LEGAL-*` privacy and tenancy
- `CF-DNS-*` Cloudflare DNS
- `CF-MX-*` Cloudflare mail records
- `CF-W-*` Cloudflare Workers
- `CF-P-*` Cloudflare Pages
- `STYLE-*` writing and UI language

## Voice in this repo

Docs in this catalogue follow Google's developer documentation highlights (second person, active voice, sentence-case headings) with Queen's English spelling. UI copy on Apple surfaces follows Apple HIG Writing. Do not mix those two on the same sentence without a reason.
