# superb [![Build Status](https://travis-ci.org/sindresorhus/superb.svg?branch=master)](https://travis-ci.org/sindresorhus/superb)

> Get superb like words

Currently 100 words.

The word list itself is just a [JSON file](words.json) and can be used wherever.


## Install

```sh
$ npm install --save superb
```


## Usage

```js
var superb = require('superb');

superb();
//=> legendary

superb();
//=> awesome

superb.words;
// ['superb', 'legendary', ...]
```


## API

### superb()

Returns a random [superb like word](words.json).

### superb.words

Array with all the words.


## CLI

```sh
$ npm install --global superb
```

```sh
$ superb --help

Example
  $ superb
  legendary
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
