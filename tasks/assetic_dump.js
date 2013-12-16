/*
 * grunt-assetic-dump
 * https://github.com/adam187/grunt-assetic-dump
 *
 * Copyright (c) 2013 Adam Misiorny
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('assetic_dump', 'Dump assets to filesystem', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      separator: grunt.util.linefeed,
      banner: '',
      footer: '',
      configFile: 'app/config/config.yml',
      assetsBaseDir: 'web/',
      webDir: 'web/'
    });

    var configFile = this.data.configFile || options.configFile;
    var assetsBaseDir = this.data.assetsBaseDir || options.assetsBaseDir;
    var webDir = this.data.webDir || options.webDir;

    // read assets from symfony config file
    var assets = grunt.file.readYAML(configFile).assetic.assets;

    if (assets) {
      for (var key in assets) {
        var inputs = assets[key].inputs;
        var output = assets[key].output;
        if (inputs) {
          var src = options.banner;
          for (var i = 0, length = inputs.length; i < length; i++) {
            var filepath = assetsBaseDir + inputs[i];
            if (!grunt.file.exists(filepath)) {
              grunt.log.error('Source file "' + filepath + '" not found.');
            } else {
              if (i) {
                src += options.separator;
              }
              src += grunt.file.read(filepath);
            }
          }
          grunt.file.write(webDir + output, src + options.footer);
        }
      }
    }

  });

};
