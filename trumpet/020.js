var trumpet = require('trumpet');
var tr = trumpet();

var fs = require('fs');
fs.createReadStream('000_index.html')
    .pipe(tr)
