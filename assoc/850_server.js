var http = require('http');
var fs = require('fs');
var trumpet = require('trumpet');
var ecstatic = require('ecstatic')(__dirname + '/static');

var assoc = require('./160_assoc.js');
var render = {
    hackerspace: require('./370_hackerspace.js'),
    hacker: require('./420_hacker.js')
};

var shoe = require('shoe');
var sock = shoe(function (stream) {
    stream.pipe(assoc.track()).pipe(stream);
});

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        var tr = trumpet();
        var q = assoc.list('hackerspace');
        
        var elem = tr.select('#hackerspaces');
        elem.setAttribute('data-start', q.startKey);
        elem.setAttribute('data-end', q.endKey);
        
        q.pipe(render.hackerspace()).pipe(elem.createWriteStream());
        fs.createReadStream('550_index.html').pipe(tr).pipe(res);
    }
    else if (!/\./.test(req.url)) {
        var tr = trumpet();
        var ws = tr.createWriteStream('#hackerspaces');
        
        var key = req.url.replace(/^\//, '');
        assoc.get(key, function (err, value) {
            if (err) res.end(err + '\n');
            var r = render.hackerspace();
            r.pipe(ws);
            r.end({ key: key, value: value });
        });
        fs.createReadStream('550_index.html').pipe(tr).pipe(res);
    }
    else ecstatic(req, res);
});
server.listen(5000);
sock.install(server, '/sock');
