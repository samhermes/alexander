---
title: HTML
sources:
- https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template
- https://www.matuzo.at/blog/html-boilerplate/
- https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons
---

Every page starts somewhere! This is very basic markup to start with. This sets the language of the page using the `lang` attribute on `html`, it sets the character set using `<meta charset="UTF-8">`, makes the page responsive with `<meta name="viewport" content="width=device-width">`, adds proper meta for the site icon, and gives us a class of `no-js` to use in the event that JavaScript fails to load.

```html
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">

    <title>Page title</title>

    <link rel="icon" href="/favicon.ico">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/manifest.webmanifest">

    <script type="module">
        document.documentElement.classList.remove('no-js');
        document.documentElement.classList.add('js');
    </script>

    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <script src="scripts.js"></script>
</body>
</html>
```

## Manifest file

A manifest file can define icons, in addition to the icons defined above, for those browsers that wish to take advantage of them.

```json
{
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
```

## async vs defer

When adding a script, it's important to consider when the script needs to execute, and load it no earlier than necessary. Here's a great article explaining the options: [https://zellwk.com/blog/javascript-async-and-defer/](https://zellwk.com/blog/javascript-async-and-defer/)

## Images

Images should have a width and height attribute so that the browser knows how much space to reserve for them, and they should include an alt attribute, even if empty, for screen readers.