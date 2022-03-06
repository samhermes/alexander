---
title: Form
sources:
- https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
---
First, of note, the component-level styles include cross-browser fixes, and other general improvements to the rendering of form elements. As these should only be included in a project only if forms are in use, they are not included in the base level styles.

<div class="stage">
    <button type="button" class="stage-toggle">Toggle Stage Styles</button>
    <form class="form">
        <div class="input-group">
            <label for="text">Text input label</label>
            <input type="text" id="text">
        </div>
        <div class="input-group">
            <label for="number">Number input label</label>
            <input type="text" id="number" inputmode="numeric" pattern="[0-9]*">
        </div>
        <div class="input-group">
            <label for="textarea">Textarea label</label>
            <textarea id="textarea"></textarea>
        </div>
    </form>
</div>

I like to use a `div` element with a class name of `.input-group` to wrap form inputs. It allows for consistent spacing between each label and input pair.

For inputs where numbers are being collected, instead of using `<input type="number">`, I'm using `type="text"` and then using `inputmode="numeric" pattern="[0-9]*"` to bring up the numeric keypad. `type="number"` can cause accessibility issues if not used cautiously. See the gov.uk blog post in the sources for more on this.

```html
<form class="form">
    <div class="input-group">
        <label for="text">Text input label</label>
        <input type="text" id="text">
    </div>
    <div class="input-group">
        <label for="number">Number input label</label>
        <input type="text" id="number" inputmode="numeric" pattern="[0-9]*">
    </div>
    <div class="input-group">
        <label for="textarea">Textarea label</label>
        <textarea id="textarea"></textarea>
    </div>
</form>
```

```css
.input-group {
    margin-bottom: 1.5rem;
}

.input-group:last-child {
    margin-bottom: 0;
}
```