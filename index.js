/*!
 * wordcount <https://github.com/jonschlinkert/wordcount>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function wordCount(content) {
  var matches = content.match(/[\u0400-\u04FF]+|\w+/g);
  var count = matches !== null ? matches.length : 0;
  return count;
};
