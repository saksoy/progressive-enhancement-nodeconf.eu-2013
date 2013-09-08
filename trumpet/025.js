var trumpet = require('trumpet');
var tr = trumpet();

var fs = require('fs');
fs.createReadStream('005_index.html')
    .pipe(tr).pipe(process.stdout)
;
