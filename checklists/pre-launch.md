# Pre-launch checklist

Work top to bottom. A skipped blocker is a failed launch.

## Host

- [ ] Production URL is a custom domain
- [ ] Preview host is not linked in public materials
- [ ] Preview and staging send `noindex`
- [ ] HTTP redirects to HTTPS
- [ ] Apex and www resolve to one canonical host

## Metadata

- [ ] Every public route has a unique title
- [ ] Every public route has a unique meta description
- [ ] Canonical URLs are absolute and self-referencing
- [ ] Favicon, SVG/PNG icon, and apple-touch-icon return 200
- [ ] OG title, description, image 1200x630, url, type are present
- [ ] `twitter:card` is set
- [ ] Social debugger preview is acceptable
- [ ] `robots.txt` is correct
- [ ] `sitemap.xml` lists only production canonicals

## PWA

- [ ] Manifest validates in DevTools
- [ ] 192, 512, and maskable icons exist
- [ ] Service worker is activated and handles fetch
- [ ] Offline reload shows a branded fallback or shell
- [ ] Caches are versioned
- [ ] Install / notification prompts are not on first paint

## States

- [ ] Custom 404 with navigation, HTTP 404
- [ ] Loading skeletons reserve space
- [ ] Empty states have a next action
- [ ] Error copy names the failure and the recovery
- [ ] Form errors sit on the field

## Accessibility

- [ ] Heading outline is logical
- [ ] Images have correct alt
- [ ] Buttons and links are semantic
- [ ] Focus is visible
- [ ] Keyboard completes primary tasks
- [ ] Contrast meets AA
- [ ] Reduced motion is honoured

## Hygiene

- [ ] No secrets in client bundles
- [ ] Production console is clean
- [ ] Dev files are not public
- [ ] JS budget holds
- [ ] LCP / INP / CLS gates pass on mobile
- [ ] CSP header is present

## Surface

- [ ] 320 / tablet / desktop checked
- [ ] Long text and empty data checked
- [ ] Tokens do not drift across routes

## Function

- [ ] Every visible control works
- [ ] Deep links reload to the same view
- [ ] Auth and tenant boundaries hold
- [ ] Privacy and terms are linked if data is collected
