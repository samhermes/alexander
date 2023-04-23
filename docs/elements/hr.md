---
title: HR
layout: default
---

What is more mysterious than a horizontal line? Useful for separating sections of content, this humble element doesn't need much.

I prefer to style it to match the current text color of its container using `currentColor`, and give it some margin above and below to ensure that it's not lost. The top margin will collapse into the bottom margin of whatever element comes before it, meaning we'll have equal spacing.

<div class="stage">
    <hr>
</div>

```html
<hr>
```

```css
hr {
    margin: 1rem 0;
    background-color: currentColor;
    border: 0;
}
```