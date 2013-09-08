var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');

var sub = require('level-sublevel');
var level = require('level');
var db = sub(level('/tmp/test.db', { valueEncoding: 'json' }));

var server = http.createServer(function (req, res) {
    ecstatic(req, res);
});
server.listen(5000);
