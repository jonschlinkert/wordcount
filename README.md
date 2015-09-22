# wordcount [![NPM version](https://badge.fury.io/js/wordcount.svg)](http://badge.fury.io/js/wordcount)

> Count the words in a string. Support for english, CJK and Cyrillic.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i wordcount --save
```

## Usage

```js
var wordcount = require('wordcount');

wordcount('Count the words in string.');
//=> 5
wordcount('Count the words in string, again.');
//=> 6
```

## Related projects

* [is-whitespace](https://www.npmjs.com/package/is-whitespace): Returns true if the value passed is all whitespace. | [homepage](https://github.com/jonschlinkert/is-whitespace)
* [justified](https://www.npmjs.com/package/justified): Wrap words to a specified length and justified the text. | [homepage](https://github.com/jonschlinkert/justified)
* [match-words](https://www.npmjs.com/package/match-words): Match the words in a string. | [homepage](https://github.com/jonschlinkert/match-words)
* [whitespace-regex](https://www.npmjs.com/package/whitespace-regex): Regular expression for matching the whitespace in a string. | [homepage](https://github.com/regexps/whitespace-regex)
* [word-regex](https://www.npmjs.com/package/word-regex): Regular expression for matching words in a string. Support for english, CJK and Cyrillic. | [homepage](https://github.com/jonschlinkert/word-regex)
* [word-wrap](https://www.npmjs.com/package/word-wrap): Wrap words to a specified length. | [homepage](https://github.com/jonschlinkert/word-wrap)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/wordcount/issues/new).

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 22, 2015._