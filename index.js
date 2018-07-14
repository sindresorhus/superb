'use strict';
const uniqueRandomArray = require('unique-random-array');
const words = require('./words.json');

module.exports.all = words;
module.exports.random = uniqueRandomArray(words);
