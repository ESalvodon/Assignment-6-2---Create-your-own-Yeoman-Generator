'use strict';

var generators = require('yeoman-generator');
    mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
    createProjectFileSystem:function() {
         var desRoot = this.destinationRoot();
              sourceRoot = this.sourceRoot(),
             appDir = desRoot + '/app';

          mkdirp(appDir + '/scripts');
          mkdirp(appDir + '/img');

          this.fs.copy(sourceRoot + '/.bowercc', desRoot + '/bowercc');
          this.fs.copy(sourceRoot + '/.bower.json', desRoot + '/bowercc');
    }
});
