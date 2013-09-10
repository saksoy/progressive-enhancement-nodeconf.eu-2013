var shoe = require('shoe');
var sock = shoe('/sock');

var render = require('./370_hackerspace.js')();
render.pipe(sock);
