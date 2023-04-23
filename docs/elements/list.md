---
title: List
layout: default
---

Lists receive bottom margin, which is removed if it is the last child element. This keeps things neat and tidy for the parent container. Left padding is also slightly reduced from the typical browser default, to bring it into alignment with other block level elements.

<div class="stage">
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
</div>

```html
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

```css
ol,
ul {
    padding-left: 2rem;
}

ol,
ul,
dl {
    margin-top: 0;
    margin-bottom: 1rem;
}

ol:last-child,
ul:last-child,
dl:last-child {
    margin-bottom: 0;
}

ol ol,
ul ul,
ol ul,
ul ol {
    margin-bottom: 0;
}
```