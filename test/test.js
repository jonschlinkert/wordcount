/*!
 * wordcount <https://github.com/jonschlinkert/wordcount>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var wordcount = require('../');

describe('wordcount', function() {
  it('should count the words in a string.', function () {
    var actual = wordcount('Count the words in string.');
    actual.should.eql(5)
  });

  it('should count the words in a string.', function () {
    var actual = wordcount('Count the words in string, again.');
    actual.should.eql(6)
  });

  it('should count the words in a cyrillic string.', function () {
    var actual = wordcount('Тест стринг кирилица.');
    actual.should.eql(3)
  });

  it('should count the words in a mixed string (latin and cyrillic).', function () {
    var actual = wordcount('Тест mixed стринг кирилица and latin string.');
    actual.should.eql(7)
  });
});

