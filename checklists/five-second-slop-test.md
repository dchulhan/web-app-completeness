# Five-second slop test

Open the production URL on a phone. Do not touch DevTools yet.

## Seconds 0-5

Fail immediately if any of these are true:

1. The host is a preview or default platform domain.
2. The tab title is the framework default, the repo name, or identical on two routes.
3. There is no favicon.
4. Sharing the URL produces a blank or generic card.
5. The first prominent button does nothing.
6. The first fold is a purple-blue gradient, Inter, and three equal cards with no product-specific content.

## Minutes 1-10

1. Turn the network off. Reload. Browser default offline page is a fail.
2. Open a junk path. Generic host 404 is a fail.
3. Open a list with no data. Blank table is a fail.
4. Tab through the header. No focus ring is a fail.
5. Open the console. Logs and 404 assets are a fail.

## What "looks finished" is allowed to hide

None of the above. Visual taste can wait. Host, title, preview, dead controls, and missing states cannot.
