var hyperspace = require('hyperspace');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/010_article.html');

module.exports = function () {
    return hyperspace(html, function (row) {
        return {
            '.title a': {
                href: row.href,
                _text: row.title
            },
            '.body': { _html: row.body },
            '.author': row.author
        };
    });
};
