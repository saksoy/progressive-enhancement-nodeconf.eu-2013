var hyperspace = require('hyperspace');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/010_article.html');

var hs = hyperspace(html, {
    '.title a': {
        href: '/glue',
        _text: 'All programming is just glue code!'
    },
    '.body': { _html: 'True facts.' },
    '.author': 'substack'
});
