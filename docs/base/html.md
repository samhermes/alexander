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

Sources:
- https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template
- https://www.matuzo.at/blog/html-boilerplate/