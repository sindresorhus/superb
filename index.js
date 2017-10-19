'use strict';
const uniqueRandomArray = require('unique-random-array');
const words = require('./words.json');

module.exports = uniqueRandomArray(words);
module.exports.words = words;
