# Alexander

Front-end starter kit

## About

Alexander was built in two distinct levels, a base level that includes browser consistency styles and standard accessibility features, and an implementation level, broken out into elements and components. Include just the base level in your project and or include all for a jump start.

## Installation

Install Alexander from GitHub using npm with:

```bash
npm install samhermes/alexander#1.0.6
```

## Components

Components are not included with Alexander by default. They can be imported as needed and customized to fit your project.

### Accordion

Creates an interactive accordion component, with the proper attributes applied to make it accessible.

How to use:

```js
import { Accordions } from 'alexander';

Accordions();
```

Parameters:
- `selector`: A string for customizing the accordion selector. Default: `.accordion`

Files:
- `src/js/components/accordion.js`
- `src/sass/components/_accordion.scss`

### Tabs

Creates an interactive tabs component, with the proper attributes applied to make it accessible.

How to use:

```js
import { Tabs } from 'alexander';

Tabs();
```

Parameters:
- `selector`: A string for customizing the tabs selector. Default: `.tabs`

Files:
- `src/js/components/tabs.js`
- `src/sass/components/_tabs.scss`

### Video Controls

Adds custom video controls to HTML `video` elements, with the proper attributes applied to make it accessible.

How to use:

```js
import { Videos } from 'alexander';

Videos();
```

Parameters:
- `selector`: A string for customizing the video selector. Default: `.video`

Files:
- `src/js/components/video.js`
- `src/sass/components/_videos.scss`