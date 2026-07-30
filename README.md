# Alexander

Front-end starter kit

## About

Alexander was built in two distinct levels, a base level that includes browser consistency styles and standard accessibility features, and an implementation level, broken out into elements and components. Include just the base level in your project and or include all for a jump start.

## Installation

Install Alexander from GitHub using npm with:

```bash
npm install samhermes/alexander#1.1.1
```

## Styles

You can import the base and element SCSS into your project with `@use`:

```scss
@use '/node_modules/alexander/scss';
```

Alternatively, you can include the base or element SCSS as needed, either as groups or individually.

```scss
@use '/node_modules/alexander/scss/base';
@use '/node_modules/alexander/scss/elements';

// Individual element.
@use '/node_modules/alexander/scss/elements/blockquote';
```

All component SCSS needs to be included individually.

```scss
@use '/node_modules/alexander/scss/components/card';
```

## Components

Components are not included with Alexander by default. They can be imported as needed and customized to fit your project.

### Accordion

Creates an interactive accordion component, with the proper attributes applied to make it accessible.

How to use:

```html
<alexander-accordion>
    <div class="accordion-heading">
        <h2>Accordion 1 heading</h2>
    </div>
    <div class="accordion-content">
        <p>Accordion 1 content</p>
    </div>
</alexander-accordion>
```

```js
import { Accordion } from 'alexander';

new Accordion();
```

```scss
@use '/node_modules/alexander/scss/components/accordion';
```

### Tabs

Creates an interactive tabs component, with the proper attributes applied to make it accessible.

How to use:

```html
<alexander-tabs>
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
</alexander-tabs>
```

```js
import { Tabs } from 'alexander';

new Tabs();
```

```scss
@use '/node_modules/alexander/scss/components/tabs';
```

### Video Controls

Adds custom video controls to HTML `video` elements, with the proper attributes applied to make it accessible.

How to use:

```html
<alexander-video>
    <video src="/example/src/video.js"></video>
</alexander-video>
```

```js
import { Video } from 'alexander';

new Video();
```

```scss
@use '/node_modules/alexander/scss/components/video';
```
