---
title: Skip Link
layout: default
section: Base
---

Skip links help a user get directly to the main content of a page, by skipping over the header, navigation, or other interactive elements on the page before the `<main>` element. This element is hidden by default, and becomes visible when focused.

The skip link depends on screen reader text to hide it by default, and then overrides those styles as appropriate when it receives focus. This is one of the few times that a randomly high z-index value makes sense.

If you'd like to demo this feature, go to the first tab stop on this page.

```html
<a href="#content" class="skip-link screen-reader-text">Skip to main content</a>
```

```css
.skip-link:focus {
    background-color: #fff;
    border: 2px solid currentColor;
    clip: auto;
    left: 0.5rem;
    top: 0.5rem;
    width: auto;
    height: auto;
    padding: 0.5rem 1rem;
    margin: 0;
    z-index: 100;
}
```