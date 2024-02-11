---
title: Blockquote
layout: default
section: Elements
---

Blockquotes receive bottom margin, which is removed if it is the last child element. This keeps things neat and tidy for the parent container.

<div class="stage">
    <blockquote>
        <p>People often ask me if I know the secret of success and if I could tell others how to make their dreams come true. My answer is, you do it by working.</p>
        <cite>Walt Disney</cite>
    </blockquote>
</div>

```html
<blockquote>
    <blockquote>
        <p>People often ask me if I know the secret of success and if I could tell others how to make their dreams come true. My answer is, you do it by working.</p>
        <cite>Walt Disney</cite>
    </blockquote>
</blockquote>
```

```css
blockquote {
    margin: 0 0 1rem;
}

blockquote:last-child {
    margin-bottom: 0;
}
```