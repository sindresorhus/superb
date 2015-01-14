#!/usr/bin/env node
'use strict';
var meow = require('meow');
var superb = require('./');

meow({
	help: [
		'Example',
		'  $ superb',
		'  legendary'
	].join('\n')
});

console.log(superb());
