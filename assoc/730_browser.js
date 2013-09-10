var shoe = require('shoe');
var sock = shoe('/sock');
var rassoc = require('render-assoc');

var render = require('./370_hackerspace.js')();
render.pipe(sock).pipe(rassoc(/*
    ...
*/));
