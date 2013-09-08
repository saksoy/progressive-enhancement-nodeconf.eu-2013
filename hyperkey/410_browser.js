var shoe = require('shoe');
var sock = shoe('/sock');

var render = require('./050_render.js')();
render.pipe(sock).pipe(render.sortTo('#messages'));

// browserify -t brfs 410_browser.js -o static/bundle.js
// node 320_server.js &
// xdg-open http://localhost:5000
