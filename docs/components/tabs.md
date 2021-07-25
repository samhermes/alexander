---
title: Tabs
---

<div class="stage">
    <div class="tabs">
        <ul role="tablist">
            <li role="presentation">
                <a id="tab-1" href="#tab-1-panel" role="tab" aria-controls="tab-1-panel" aria-selected="true">Tab 1</a>
            </li>
            <li role="presentation">
                <a id="tab-2" href="#tab-2-panel" role="tab" aria-controls="tab-2-panel" aria-selected="false">Tab 2</a>
            </li>
            <li role="presentation">
                <a id="tab-3" href="#tab-3-panel" role="tab" aria-controls="tab-3-panel" aria-selected="false">Tab 3</a>
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