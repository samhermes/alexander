---
title: HTML
---
Basic markup to start with. I pulled some of this from Bootstrap, and some from [this article by Manuel Matuzović](https://www.matuzo.at/blog/html-boilerplate/).

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

```json
{
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
```

Sources:
- https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template
- https://www.matuzo.at/blog/html-boilerplate/
- https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs