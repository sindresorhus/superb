#!/usr/bin/env node
'use strict';
const meow = require('meow');
const superb = require('.');

const cli = meow(`
	Examples
	  $ superb
	  legendary

	  $ superb --all
	  ace
	  amazing
	  …

	Options
	  --all  Get all the words instead of a random word
`);

console.log(cli.flags.all ? superb.words.join('\n') : superb());
