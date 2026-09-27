# 05 — Accessibility

## Rules

- A11Y-001 Heading outline is a real outline
- A11Y-002 Images have appropriate alt
- A11Y-003 Controls are semantic
- A11Y-004 Contrast and motion
- A11Y-005 Keyboard and input

Target: WCAG 2.2 AA. Automated scores are a floor. Manual keyboard and headings-list checks are required.

## Headings

One `h1` that names the page. Sections use `h2`, subsections `h3`. Do not skip ranks to get a visual size. Do not mark marketing sentences as headings. Empty headings fail.

## Images

- Informative: alt describes the content
- Functional (linked logo): alt is the destination or brand name
- Decorative: `alt=""`
- Text in the image: alt includes that text

Generated alt that says "image of a modern dashboard ui" is noise. Rewrite it.

## Controls

`a` for navigation with a real `href`. `button` for actions. Icon-only controls need `aria-label` or visible text. Do not remove focus outlines. A 2px ring with offset is the default repair.

## Input

Every primary task completes with keyboard. Touch targets prefer 44x44 CSS pixels; WCAG 2.2 target size is 24px minimum with exceptions. Hover-only actions must have a click or tap equivalent.

## Motion and colour

Honour `prefers-reduced-motion`. If you ship dark mode, honour `prefers-color-scheme` or an in-app control that persists. Contrast applies to text, icons that convey meaning, and focus.
