/*
 * grunt-assetic-dump
 * https://github.com/adam187/grunt-assetic-dump
 *
 * Copyright (c) 2013 Adam Misiorny
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Configuration.
  grunt.initConfig({

    // Jshint
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

    assetic_dump: {
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Unit tests.
    nodeunit: {
      tests: ['tests/*_test.js'],
    },

  });

  // Load this plugin's task.
  grunt.loadTasks('tasks');

  // Load deps tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Register tasks
  grunt.registerTask('test', ['clean', 'assetic_dump', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};
