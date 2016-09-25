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
```

## Backslash, or win32 separator

`\` is considered a separator only on WIN32 systems. All UNIX compliant systems
see backslash as a valid file name character, so it would break UNIX compliance
to remove it there.

In practice, this means that this code will return different things depending on
what system it runs on:

```
removeTrailingSeparator('\\foo\\')
// UNIX  => '\\foo\\'
// WIN32 => '\\foo'
```

[npm-url]: https://npmjs.org/package/remove-trailing-separator
[npm-image]: https://badge.fury.io/js/remove-trailing-separator.svg
[travis-url]: https://travis-ci.org/darsain/remove-trailing-separator
[travis-image]: https://travis-ci.org/darsain/remove-trailing-separator.svg?branch=master
[coveralls-url]: https://coveralls.io/github/darsain/remove-trailing-separator?branch=master
[coveralls-image]: https://coveralls.io/repos/github/darsain/remove-trailing-separator/badge.svg?branch=master