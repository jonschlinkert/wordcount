/*!
 * wordcount <https://github.com/jonschlinkert/wordcount>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function wordcount(str) {
  // regex from https://github.com/lepture/editor/blob/master/src/intro.js#L343
  var pattern = /[a-zA-Z0-9_\u0392-\u03c9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;

  var matches = str.match(pattern);
  if (matches === null) {
    return 0;
  }

  return matches.length;
};
