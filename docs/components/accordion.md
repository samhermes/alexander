---
title: Accordion
---
Accordions act as a way of collapsing otherwise unwieldy content. This can be useful for contexts where its more useful to show an overview of options, such as when dividing by audience or action. They should not be used for aesthetic reasons alone.

Accordions should be thought of as simply pairs of headings and their corresponding content. If the accordion functionality is removed, the content should still make sense in the hierarchy of the page and remain accessible. For this reason, we want to conditionally apply accordion scripts if JavaScript is available.

<div class="stage">
    <button type="button" class="stage-toggle">Toggle Stage Styles</button>
    <div class="accordion">
        <div class="accordion-heading">
            <h2>Accordion 1 heading</h2>
        </div>
        <div class="accordion-content">
            <p>Accordion 1 content</p>
        </div>
    </div>
    <div class="accordion">
        <div class="accordion-heading">
            <h2>Accordion 2 heading</h2>
        </div>
        <div class="accordion-content">
            <p>Accordion 2 content</p>
        </div>
    </div>
</div>

There are several conditions that we need to keep in mind with this accordion:
- No JavaScript enabled
- User prefers reduced motion

```html
<div class="accordion">
    <div class="accordion-heading">
        <h2>Accordion 1 heading</h2>
    </div>
    <div class="accordion-content">
        <p>Accordion 1 content</p>
    </div>
</div>
```

<div class="article-feature">
    <a href="https://samhermes.com/posts/how-to-make-accessible-accordions/">
        <p>Learn more about implementing this component:</p>
        <p class="link-text">samhermes.com/posts/how-to-make-accessible-accordions</p>
        {% include icons/external-link.svg %}
    </a>
</div>