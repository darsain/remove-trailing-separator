# remove-trailing-separator

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

Removes all separators from the end of a string.

## Install

```
npm install remove-trailing-separator
```

## Examples

```js
const removeTrailingSeparator = require('remove-trailing-separator');

removeTrailingSeparator('/foo/bar/')   // '/foo/bar'
removeTrailingSeparator('/foo/bar///') // '/foo/bar'

// leaves only/last separator
removeTrailingSeparator('/')    // '/'
removeTrailingSeparator('///')  // '/'

// returns empty string
removeTrailingSeparator('') // ''

// same as above for win32 separators
removeTrailingSeparator('\\foo\\bar\\')     // '\\foo\\bar'
removeTrailingSeparator('\\foo\\bar\\\\\\') // '\\foo\\bar'
removeTrailingSeparator('\\')               // '\\'
removeTrailingSeparator('\\\\\\')           // '\\'
removeTrailingSeparator('')                 // ''
```

[npm-url]: https://npmjs.org/package/remove-trailing-separator
[npm-image]: https://badge.fury.io/js/remove-trailing-separator.svg
[travis-url]: https://travis-ci.org/darsain/remove-trailing-separator
[travis-image]: https://travis-ci.org/darsain/remove-trailing-separator.svg?branch=master
[coveralls-url]: https://coveralls.io/github/darsain/remove-trailing-separator?branch=master
[coveralls-image]: https://coveralls.io/repos/github/darsain/remove-trailing-separator/badge.svg?branch=master