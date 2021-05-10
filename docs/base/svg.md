---
title: SVGs
---

It's best to inline SVGs if possible, as this cuts out an HTTP request, and makes them easier to style depending on their context.

If using an inline SVG as a decorative accompaniment to a text label (even if it's screen reader text), it's good to add these two attributes to hide it from screen readers and ensure that IE users cannot tab to it.

```markup
aria-hidden="true" focusable="false"
```

It's also good to add a height and width to the SVG element itself, in the event that CSS fails to load. This could be difficult or undesirable if the icon is used in several locations across a project at different sizes.

```markup
width="1em" height="1em"
```

Sources:
- [callumhart.com/blog/an-accessible-current-page-navigation-state](https://www.callumhart.com/blog/an-accessible-current-page-navigation-state/)
- [kittygiraudel.com/2020/12/10/accessible-icon-links](https://kittygiraudel.com/2020/12/10/accessible-icon-links/)