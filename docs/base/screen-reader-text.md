---
title: Screen Reader Text
sources:
- https://getbootstrap.com/docs/5.0/helpers/visually-hidden/
---

Screen reader text is used to visually hide text, but leave it accessible to screen readers. This is useful for buttons that only display an icon, or for giving more context to links if needed.

```css
.screen-reader-text {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```