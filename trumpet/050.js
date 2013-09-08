var trumpet = require('trumpet');
var tr = trumpet();

var xyz = tr.select('#xyz');
xyz.createWriteStream().end('BEEP BOOP');
xyz.setAttribute('class', 'robot');

var fs = require('fs');
fs.createReadStream('000_index.html')
    .pipe(tr).pipe(process.stdout)
;

// 050.js
