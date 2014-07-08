'use strict';
var words = require('./words.json');
var uniqueRandom = require('unique-random')(0, words.length - 1);

module.exports = function () {
	return words[uniqueRandom()];
};

module.exports.words = words;
