var hyperkey = require('hyperkey');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/300_hackerspace.html');
var hacker = require('./420_hacker.js');

module.exports = function () {
    return hyperkey(html, function (row) {
        return {
            '.name': row.name,
            '.hackers': (function (stream) {
                // ...
            })(row.hackers())
        };
    });
};
