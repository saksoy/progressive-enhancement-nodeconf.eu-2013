var trumpet = require('trumpet');
var tr = trumpet();

var xyz = tr.select('#xyz');
xyz.createWriteStream().end('BEEP BOOP');
xyz.setAttribute('class', 'robot');

tr.createWriteStream('title').end('TITLE TEXT!!!!!!');

var fs = require('fs');
fs.createReadStream('005_index.html')
    .pipe(tr).pipe(process.stdout)
;

// 060.js
