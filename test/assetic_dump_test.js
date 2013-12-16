
'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var testFiles = ['css/screen.css', 'js/all.js'];

exports.assetic_dump = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(2);

    testFiles.forEach(function(file) {
      var actual = grunt.file.read('tmp/' + file);
      var expected = grunt.file.read('test/expected/default_options/' + file);
      test.equal(actual, expected, 'files should be equal.');
    });

    test.done();
  },
  custom_options: function(test) {
    test.expect(2);

    testFiles.forEach(function(file) {
      var actual = grunt.file.read('tmp/custom_options/' + file);
      var expected = grunt.file.read('test/expected/custom_options/' + file);
      test.equal(actual, expected, 'files should be equal.');
    });

    test.done();
  }
};
