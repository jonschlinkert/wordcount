/*!
 * wordcount <https://github.com/jonschlinkert/wordcount>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function wordcount(str) {
  // CJK and Cyrillic regex from:
  // https://github.com/lepture/editor/blob/master/src/intro.js#L343
  // added cyrillic: \u0400-\u04FF - to the end of groups
  var pattern = /[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/g;

  var matches = str.match(pattern);
  if (matches === null) {
    return 0;
  }

  return matches.length;
};
