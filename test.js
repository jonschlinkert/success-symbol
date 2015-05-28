'use strict';

/* deps: mocha */
var assert = require('assert');
var success = require('./');

describe('success', function () {
  it('should return a success symbol based on OS:', function () {
    if (process.platform === 'win32') {
      assert.equal(success, '√');
    } else {
      assert.equal(success, '✔');
    }
  });
});
