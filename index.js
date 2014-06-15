/*!
 * wordcount <https://github.com/jonschlinkert/wordcount>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';


// Split the text into an array of words
var wordArray = function (str) {
  return str.split(/[\s]+/).filter(Boolean);
};

module.exports = function wordcount(str) {
  return wordArray(str).length;
};