var http = require('http');
var fs = require('fs');
var trumpet = require('trumpet');
var ecstatic = require('ecstatic')(__dirname + '/static');

var assoc = require('./160_assoc.js');
var render = require('./370_hackerspace.js');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        var tr = trumpet();
        var q = assoc.list('hackerspace');
        
        var elem = tr.select('#hackerspaces');
        elem.setAttribute('data-start', q.startKey);
        elem.setAttribute('data-end', q.endKey);
        
        q.pipe(render()).pipe(elem.createWriteStream());
        fs.createReadStream('550_index.html').pipe(tr).pipe(res);
    }
    else ecstatic(req, res);
});
server.listen(5000);

// rm -rf /tmp/assoc.db
// node 570_server.js
// curl http://localhost:5000
