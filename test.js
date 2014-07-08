'use strict';
var test = require('ava');
var superb = require('./');

test('returns a random superb word', function (t) {
	t.assert(superb().length > 0);
});

test('returns all the words', function (t) {
	t.assert(Array.isArray(superb.words));
	t.assert(superb.words[3].length > 0);
});
