var http = require('http');
var fs = require('fs');
var trumpet = require('trumpet');
var ecstatic = require('ecstatic')(__dirname + '/static');

var assoc = require('./160_assoc.js');
var render = require('./render/hackerspace.js');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        var tr = trumpet();
        var q = assoc.list('hackerspace');
        
        var elem = tr.select('#hackerspaces');
        
        q.pipe(render())
    }
    else ecstatic(req, res);
});
server.listen(5000);
