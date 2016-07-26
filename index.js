'use strict';
var uniqueRandomArray = require('unique-random-array');
var words = require('./words.json');

module.exports = uniqueRandomArray(words);
module.exports.words = words;
