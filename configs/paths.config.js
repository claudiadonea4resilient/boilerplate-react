
var path = require('path');

var publicPaths = (function(){
    var base = './../';
    var app = base + 'app/';
    var babelSettings = {
      extends: path.join(__dirname, '/.babelrc')
    };

    return {
      base: base,
      app: app,
      entry: app + 'main/js/index.js',
      dist: base + '/dist',
      babelPath: 'babel?' + JSON.stringify(babelSettings)//hack, babel wasn't processing files
    };
})();

module.exports = publicPaths;
