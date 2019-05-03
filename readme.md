# superb [![Build Status](https://travis-ci.org/sindresorhus/superb.svg?branch=master)](https://travis-ci.org/sindresorhus/superb)

> Get superb like words

Currently ~100 words. **I'm not accepting more words.**

The word list itself is just a [JSON file](words.json) and can be used anywhere.


## Install

```
$ npm install superb
```


## Usage

```js
const superb = require('superb');

superb.random();
//=> 'legendary'

superb.random();
//=> 'awesome'

superb.all;
//=> ['ace', 'amazing', …]
```

## API

### .all

Type: `string[]`

All the words in alphabetical order.

### .random()

Type: `Function`

Random word.


## Related

- [superb-cli](https://github.com/sindresorhus/superb-cli) - CLI for this module
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
