# progressive enhancement

You can use the same language on the server and the browser
but we're mostly building apps in the same way as before.

Here's how to make apps a different way with shared rendering logic
that renders the initial page load completely server side and then upgrades into
rendering from a live realtime feed in the browser.

# trumpet

# hyperglue

Problems with using templating engines for live-updating:

* need to add shim containers to keep a handle

# browserify

Now that we have some rendering logic, we can make it work in both the browser
and in node.

# brfs

add `-t brfs` to browserify:

```
$ browserify main.js -t brfs > bundle.js
```

and now you can do `fs.readFileSync()` in your browser code:

```
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/message.html');
```

# hyperspace

# level-track

# hyperkey

# level-assoc

# render-assoc

# extravaganza

