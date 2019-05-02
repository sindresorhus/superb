import words = require('./words.json');

declare const superb: {
	/**
	All the words in alphabetical order.

	@example
	```
	import superb = require('superb');

	superb.all;
	//=> ['ace', 'amazing', …]
	```
	*/
	readonly all: Readonly<typeof words>;

	/**
	Random word.

	@example
	```
	import superb = require('superb');

	superb.random();
	//=> 'legendary'

	superb.random();
	//=> 'awesome'
	```
	*/
	random(): string;
};

export = superb;
