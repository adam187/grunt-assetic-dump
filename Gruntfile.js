/*
 * grunt-assetic-dump
 * https://github.com/adam187/grunt-assetic-dump
 *
 * Copyright (c) 2013 Adam Misiorny
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    assetic_dump: {
      options: {
        configFile: 'test/app/config/config.yml',
        assetsBaseDir: 'test/fixtures/',
        webDir: 'tmp/'
      },
      default_options: {
      },
      custom_options: {
        webDir: 'tmp/custom_options/',
        options: {
          separator: '/* sep */\n',
          banner: '/* banner */\n',
          footer: '/* footer */\n'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'assetic_dump', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
