
var path = require('path');

var publicPaths = (function(){
    var base = '/';
    var baseAbsolute = path.resolve('./');
    var appAbsolute = path.resolve('./app');

    var app = base + 'app/';
    var babelSettings = {
      extends: path.join(__dirname, '/.babelrc')
    };

    return {
      base: base,
      app: appAbsolute,//app,
      entry: path.resolve(appAbsolute + '/main/index.js'),//app + 'main/js/index.js',
      dist: baseAbsolute + '/dist',
      babelPath: 'babel?' + JSON.stringify(babelSettings)//hack, babel wasn't processing files
    };
})();

module.exports = publicPaths;
