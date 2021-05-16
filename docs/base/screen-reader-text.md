---
title: Screen Reader Text
---

Screen reader text is used to visually hide text, but leave it accessible to screen readers. This is useful for buttons that only display an icon, or for giving more context to links.

```css
.screen-reader-text {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}
```

Sources
- Visually Hidden from Bootstrap [getbootstrap.com/docs/5.0/helpers/visually-hidden](https://getbootstrap.com/docs/5.0/helpers/visually-hidden/)