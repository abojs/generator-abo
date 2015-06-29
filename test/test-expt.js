'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('abo:expt', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/expt'))
      .withOptions({ skipInstall: true })
      .withPrompts({ name: 'bar' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bar/setup.js',
      'bar/index.js',
      'bar/_bundle.js',
      'bar/ac.js'
    ]);
  });
});
