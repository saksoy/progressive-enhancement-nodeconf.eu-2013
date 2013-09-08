var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');
var trumpet = require('trumpet');

var sub = require('level-sublevel');
var level = require('level');
var db = sub(level('/tmp/test.db', { valueEncoding: 'json' }));

var render = require('./050_render.js');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        var start = 'message', end = 'message~';
        
        var tr = trumpet();
        var elem = tr.select('#messages');
        
        db.createReadStream({ start: start, end: end })
            .pipe(render())
        ;
    }
    else ecstatic(req, res);
});
server.listen(5000);
