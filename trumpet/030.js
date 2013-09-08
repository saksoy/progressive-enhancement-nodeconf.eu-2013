var trumpet = require('trumpet');
var tr = trumpet();

var xyz = tr.select('#xyz');

var fs = require('fs');
fs.createReadStream('000_index.html')
    .pipe(tr).pipe(process.stdout)
;
