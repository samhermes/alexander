---
title: Card
layout: default
---

A card is a grouping of elements, usually starting with a heading, joined by an image, paragraph, meta, or link. If the card includes a link, this could be a simple button, or the entire card could link. This pattern creates a variety of issues, as getting the markup, interactivity, and accessibility considerations all set is a delicate balancing act. See [Inclusive Components](https://inclusive-components.design/cards/) for more information about how to approaach them.

<div class="stage">
    <button type="button" class="stage-toggle">Toggle Stage Styles</button>
    <div class="card">
        <div class="card-contents">
            <h2 class="heading-2">Card Heading</h2>
            <p>Card content.</p>
            <a href="">Call to Action</a>
        </div>
        <div class="card-image">
            <img src="/img/card-image.jpg" alt="Sunrise Peyto lake Banff national park Canadian Rockies">
        </div>
    </div>
</div>

The heading in a card needs to come first, so the image is placed after the text content in the markup and then moved back with flexbox ordering. Additionally, the heading level should be contextual, fitting into the page hierarchy just like any other heading. Using CSS, the heading can look the same no matter which level it is.

```html
<div class="card">
    <div class="card-contents">
        <h2 class="heading-2">Card Heading</h2>
        <p>Card content.</p>
        <a href="">Call to Action</a>
    </div>
    <div class="card-image">
        <img src="card-image.jpg" alt="Sunrise Peyto lake Banff national park Canadian Rockies">
    </div>
</div>
```