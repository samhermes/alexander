---
title: Tabs
---

<div class="stage">
    <button type="button" class="stage-toggle">Toggle Stage Styles</button>
    <div class="tabs">
        <ul role="tablist">
            <li role="presentation">
                <button type="button" id="tab-1" role="tab" aria-controls="tab-1-panel" aria-selected="true">Tab 1</button>
            </li>
            <li role="presentation">
                <button type="button" id="tab-2" role="tab" aria-controls="tab-2-panel" aria-selected="false">Tab 2</button>
            </li>
            <li role="presentation">
                <button type="button" id="tab-3" role="tab" aria-controls="tab-3-panel" aria-selected="false">Tab 3</button>
            </li>
        </ul>
        <div id="tab-1-panel" role="tabpanel" aria-labelledby="tab-1" aria-hidden="false">
            <p>Tab 1 content</p>
        </div>
        <div id="tab-2-panel" role="tabpanel" aria-labelledby="tab-2" aria-hidden="true">
            <p>Tab 2 content</p>
        </div>
        <div id="tab-3-panel" role="tabpanel" aria-labelledby="tab-3" aria-hidden="true">
            <p>Tab 3 content</p>
        </div>
    </div>
</div>

There is a condition that we need to keep in mind with these tabs:
- No JavaScript enabled

```html
<div class="tabs">
    <ul role="tablist">
        <li role="presentation">
            <button type="button" id="tab-1" role="tab" aria-controls="tab-1-panel" aria-selected="true">Tab 1</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-2" role="tab" aria-controls="tab-2-panel" aria-selected="false">Tab 2</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-3" role="tab" aria-controls="tab-3-panel" aria-selected="false">Tab 3</button>
        </li>
    </ul>
    <div id="tab-1-panel" role="tabpanel" aria-labelledby="tab-1" aria-hidden="false">
        <p>Tab 1 content</p>
    </div>
    <div id="tab-2-panel" role="tabpanel" aria-labelledby="tab-2" aria-hidden="true">
        <p>Tab 2 content</p>
    </div>
    <div id="tab-3-panel" role="tabpanel" aria-labelledby="tab-3" aria-hidden="true">
        <p>Tab 3 content</p>
    </div>
</div>
```

```css
[role="tablist"] {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

[role="tablist"] button {
    display: block;
    background: none;
    border: none;
    border-radius: 0.3rem 0.3rem 0 0;
    color: $text-color;
    padding: 0.5rem 1rem;
    margin: 0;
}

[role="tablist"] button[aria-selected="true"] {
    background: #fff;
}

[role="tabpanel"] {
    padding: 2rem 2.5rem;
}

[role="tabpanel"][aria-hidden="false"] {
    background: #fff;
}

[role="tabpanel"]:not([aria-hidden="false"]) {
    display: none;
}
```