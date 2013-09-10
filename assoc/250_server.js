var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');

var assoc = require('./160_assoc.js');

var server = http.createServer(function (req, res) {
    ecstatic(req, res);
});
server.listen(5000);
