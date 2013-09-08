var shoe = require('shoe');
var sock = shoe('/sock');

var render = require('./050_render.js')();
render.pipe(sock).pipe(render.sortTo('#messages'));
