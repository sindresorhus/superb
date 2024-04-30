import uniqueRandomArray from 'unique-random-array';
import superbWords from './superb-words.json' with {type: 'json'};

export default superbWords;

export const randomSuperbWord = uniqueRandomArray(superbWords);
