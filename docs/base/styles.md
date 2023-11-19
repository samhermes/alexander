---
title: Styles
layout: default
sources:
- https://getbootstrap.com/docs/5.0/content/reboot/
- https://github.com/necolas/normalize.css/
- https://piccalil.li/blog/a-modern-css-reset/
- https://www.joshwcomeau.com/css/custom-css-reset/
- https://iainbean.com/posts/2021/5-steps-to-faster-web-fonts/
---

There is less of a reason for a reset or normalize at this point in time, with browsers getting more consistent in their default stylesheet. However, there are some things that still need some adjustment. This focuses more on the browser inconsistencies and less on default styles. With this starter kit, I wanted to see if I could separate these two, as I find many of the starting stylesheets in use today try to do too much, and many of their styles are simply overwritten by project-specific styles.

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #303030;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

[tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
}

address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
}

b,
strong {
    font-weight: 600;
}

sub,
sup {
    position: relative;
    font-size: 0.75rem;
    line-height: 0;
    vertical-align: baseline;
}

sub { bottom: -.25em; }
sup { top: -.5em; }

figure {
    margin: 0 0 1rem;
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}

img {
    height: auto;
}

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

a {
    color: #303030;
}

iframe {
    display: block;
    border: 0;
}

input, button, textarea, select {
    font: inherit;
}

[hidden] {
    display: none !important;
}
```

## A note about fonts

Beyond these basics, if a project does not have a custom font in play, system fonts are a great choice. The current best declaration for this is as follows.

```css
font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

Loading custom fonts: [iainbean.com/posts/2021/5-steps-to-faster-web-fonts](https://iainbean.com/posts/2021/5-steps-to-faster-web-fonts/)