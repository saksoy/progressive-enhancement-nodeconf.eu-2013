var hyperkey = require('hyperkey');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/300_hackerspace.html');

module.exports = function () {
    return hyperkey(html, function (row) {
        return {
            '.name': {
                _text: row.name,
                href: '/' + row.name
            }
        };
    });
};
