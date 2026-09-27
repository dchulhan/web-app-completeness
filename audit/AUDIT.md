# Audit procedure

Run against the production origin. Record failures by rule id from `RULES.yaml`.

## 1. Host

1. Read the address bar.
2. `curl -sI` the production URL, the preview URL, and `http://`.
3. Confirm `X-Robots-Tag` on previews and staging.
4. Confirm a single canonical host.

## 2. Route metadata

1. List every public path in `route-meta.csv`.
2. For each path, view source (not only the hydrated DOM).
3. Record title, description, canonical, og:image status, h1.
4. Fetch `/robots.txt`, `/sitemap.xml`, `/favicon.ico`, `/manifest.webmanifest`.

## 3. States

1. Request `/this-route-does-not-exist`. Expect HTTP 404 and branded chrome.
2. DevTools offline, reload a cached route and an uncached route.
3. Force an empty collection.
4. Force an API 500.
5. Submit an invalid form.

## 4. Accessibility

1. Dump the heading tree.
2. Inventory images without `alt`.
3. Keyboard the primary task.
4. Check focus visibility and contrast on text and controls.

## 5. Hygiene

1. Search the shipped JS for secret patterns.
2. Load each primary route with the console open.
3. Run a bundle analyser or network waterfall.
4. Run Lighthouse mobile against the gates file.

## 6. Surface and function

1. Complete `viewport-matrix.md`.
2. Click every control on every route.
3. Reload interior URLs.
4. Repeat logged-out and as a second tenant.

## Report shape

```
Rule    Severity    Result    Evidence
HOST-001 blocker    FAIL      origin is project.vercel.app
META-001 blocker    FAIL      /pricing and / share "My App"
FN-001   blocker    FAIL      header CTA href="#"
```

Blockers must be empty before a launch label.
