---
title: Paragraph
---

Paragraphs receive bottom margin, which is removed if it is the last child element. This keeps things neat and tidy for the parent container.

<div class="stage">
    <p>Alexander was built in two distinct levels, the base level that includes browser consistency styles and standard accessibility features, and an implementation level, broken out into elements and components. Include just the base level in your project and or include all for a jump start.</p>
</div>

```html
<p>Alexander was built in two distinct levels, the base level that includes browser consistency styles and standard accessibility features, and an implementation level, broken out into elements and components. Include just the base level in your project and or include all for a jump start.</p>
```

```css
p {
    margin-top: 0;
    margin-bottom: 1rem;
}

p:last-child {
    margin-bottom: 0;
}
```