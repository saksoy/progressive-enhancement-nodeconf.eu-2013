var hyperkey = require('hyperkey');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/300_hackerspace.html');

module.exports = function () {
    return hyperkey(html, function (row) {
        return {
            '.name': row.name,
            '.hackers': (function (stream) {
                return {
                    'data-start': stream.startKey,
                    'data-end': stream.endKey
                };
            })(row.hackers())
        };
    });
};
