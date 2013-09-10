var shoe = require('shoe');
var sock = shoe('/sock');
var rassoc = require('render-assoc');

var render = require('./370_hackerspace.js')();
render.pipe(sock).pipe(rassoc(render, {
    hacker: require('./420_hacker.js')
}));

render.on('element', function (elem) {
    elem.querySelector('a.name').addEventListener('click', function (ev) {
        ev.preventDefault();
        
        var spaces = document.querySelectorAll('.hackerspace');
        [].forEach.call(spaces, function (e) {
            e.classList.add('hide');
        });
        elem.classList.remove('hide');
        
        var href = this.getAttribute('href');
        window.history.pushState({ href: href }, '', href);
    });
});

render.appendTo('#hackerspaces');
