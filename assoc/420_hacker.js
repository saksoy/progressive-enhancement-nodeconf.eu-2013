var hyperkey = require('hyperkey');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/400_hacker.html');

module.exports = function () {
    return hyperkey(html, function (row) {
        return { '.name': row.name };
    });
};
