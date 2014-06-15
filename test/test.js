/*!
 * wordcount <https://github.com/jonschlinkert/wordcount>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var wordcount = require('../');

it('should count the words in a string.', function () {
  var actual = wordcount('Count the words in string.');
  expect(actual).to.eql(5);
});

it('should count the words in a string.', function () {
  var actual = wordcount('Count the words in string, again.');
  expect(actual).to.eql(6);
});
