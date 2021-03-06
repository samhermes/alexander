---
title: Form
---
First, of note, the component-level styles include cross-browser fixes, and other general improvements to the rendering of form elements. As these should only be included in a project only if forms are in use, they are not included in the base level styles.

<div class="stage">
    <button type="button" class="stage-toggle">Toggle Stage Styles</button>
    <form class="form">
        <div class="input-group">
            <label for="text">Input label</label>
            <input type="text" id="text">
        </div>
        <div class="input-group">
            <label for="textarea">Textarea label</label>
            <textarea id="textarea"></textarea>
        </div>
    </form>
</div>

I like to use a `div` element with a class name of `.input-group` to wrap form inputs. It allows for consistent spacing between each label and input pair.

```html
<form class="form">
    <div class="input-group">
        <label for="text">Input label</label>
        <input type="text" id="text">
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