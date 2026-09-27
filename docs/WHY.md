# Why this repository exists

## The problem

A web app can look finished on one laptop viewport and still fail as a product. Preview hosts, identical titles, missing mail auth, a default 404, and dead buttons are the usual gap. Generators skip those because they do not screenshot well.

## The bet

If the rules are written once, as ids with severity, both a person and an agent can apply the same gate. That is why every norm has:

- a stable id (`HOST-001`)
- a severity
- a check you can perform
- a fix
- a first-party source where one exists

## What this is

A catalogue of ship / no-ship rules for public PWAs and mobile web apps, plus the hosting and writing practices that keep that catalogue honest.

## What this is not

- Not a component library
- Not a substitute for Cloudflare, Google, or Apple docs
- Not legal advice
- Not a licence to copy vendor documentation

## Why Cloudflare is in here

Most completeness failures start at DNS. Orange-cloud on mail, a `pages.dev` origin in production, or a Worker that buffers a 30 MB body will fail users before any React state does. Pages and Workers are the common deploy targets next to Vercel, so they belong in the same gate.

## Why style guides are in here

Slop is often language, not colour. Google's developer documentation style guide is the reference for how this repo writes. Google's HTML/CSS style guide is the reference for markup in templates. Apple HIG (principles + writing) is the reference when the app is installed on Apple hardware or should feel native there. A short web style layer (WCAG + content design) sits between them so marketing pages and app chrome do not invent a third voice.
