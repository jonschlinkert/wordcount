/*!
 * wordcount <https://github.com/jonschlinkert/wordcount>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var should = require('should');
var wordcount = require('./');

it('should count the words in a string.', function () {
  wordcount('Count the words in string.').should.eql(5);
  wordcount('Count the words in string, again.').should.eql(6);
});
