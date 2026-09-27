# How to use this repository

## Human, shipping today

1. Read `docs/FOR-HUMANS.md`.
2. Tick `checklists/pre-launch.md`.
3. If the app is on Cloudflare, also tick `checklists/cloudflare.md`.
4. Fill `audit/route-meta.csv` and `audit/viewport-matrix.md`.
5. Record failures by rule id.

## Human, writing docs or UI copy

1. Read `style/this-repo.md` for catalogue prose.
2. Read `style/web.md` for product UI copy on the web.
3. Read `style/google-developer-docs.md` when the audience is developers.
4. Read `style/apple-hig.md` when the surface is an installed app on Apple platforms.

## Agent, auditing an app

1. Read `AGENTS.md`.
2. Load `RULES.yaml`.
3. Follow `audit/AUDIT.md`.
4. Return `Rule | Severity | Result | Evidence`.
5. Do not propose waivers unless the user asked for one.

## Agent, changing this repo

1. Add or edit the id in `RULES.yaml` first.
2. Update the matching `rules/*.md` file.
3. Add the first-party URL to `references.md`.
4. Update `llms.txt` if you added a path.
5. Do not duplicate the same norm in three files with different wording.

## Adding a rule

Required fields: `id`, `area`, `severity`, `title`, `check`, `fix`.
Optional: `source` URL.

Severity:

- `blocker`: do not ship
- `major`: ship only with a named waiver
- `minor`: track
