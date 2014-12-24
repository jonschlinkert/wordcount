/*!
 * wordcount <https://github.com/jonschlinkert/wordcount>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function wordcount(str) {
  var matches = str.match(regex());
  return matches !== null
    ? matches.length
    : 0;
};

// Modified from: https://github.com/lepture/editor/blob/master/src/intro.js#L343
var regex = function() {
  return /[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/g;
};