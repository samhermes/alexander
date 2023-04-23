---
title: Heading
layout: default
sources:
- https://type-scale.com/?size=16&scale=1.200
- https://www.layoutgridcalculator.com/typographic-scale/
---

Headings take advantage of two different type scales, one for narrow screens, and one for wide screens. This ensures that headings are not too overwhelmingly large on a mobile device, but clear and easy to read on a desktop or laptop.

<div class="stage">
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    <h4>Heading level 4</h4>
    <h5>Heading level 5</h5>
    <h6>Heading level 6</h6>
</div>

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

## Heading classes

Often, the visual design is at odds with the structural hierarchy of a page, so Alexander includes a set of heading classes. They can be applied to any heading to make it look like any other heading level. This is useful for areas of a page where the heading level may structurally be an h2, such as in a footer or sidebar, but look best with smaller font sizes.

- `.heading-1`
- `.heading-2`
- `.heading-3`
- `.heading-4`
- `.heading-5`
- `.heading-6`

```html
<h2 class="heading-4">Heading level 2</h2>
```

```css
h1,
.heading-1,
h2,
.heading-2,
h3,
.heading-3,
h4,
.heading-4,
h5,
.heading-5,
h6,
.heading-6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    font-weight: 600;
    line-height:1.2
}

h1:not(:first-child),
.heading-1:not(:first-child),
h2:not(:first-child),
.heading-2:not(:first-child),
h3:not(:first-child),
.heading-3:not(:first-child),
h4:not(:first-child),
.heading-4:not(:first-child),
h5:not(:first-child),
.heading-5:not(:first-child),
h6:not(:first-child),
.heading-6:not(:first-child) {
    margin-top: 1em
}

h1, .heading-1 {
    font-size: 1.802rem
}

@media screen and (min-width: 50em) {
    h1, .heading-1 {
        font-size: 2.625rem
    }
}

h2, .heading-2 {
    font-size: 1.602rem
}

@media screen and (min-width: 50em) {
    h2, .heading-2 {
        font-size: 1.7708rem
    }
}

h3, .heading-3 {
    font-size: 1.424rem
}

@media screen and (min-width: 50em) {
    h3, .heading-3 {
        font-size: 1.3958rem
    }
}

h4, .heading-4 {
    font-size: 1.266rem
}

@media screen and (min-width: 50em) {
    h4, .heading-4 {
        font-size: 1.1875rem
    }
}

h5, .heading-5 {
    font-size: 1.125rem
}

@media screen and (min-width: 50em) {
    h5, .heading-5 {
        font-size: 1.1042rem
    }
}

h6, .heading-6 {
    font-size: 1rem
}
```