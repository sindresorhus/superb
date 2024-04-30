/**
All the words in alphabetical order.

@example
```
import superbWords from 'superb';

superbWords;
//=> ['ace', 'amazing', …]
```
*/
declare const superbWords: string[];

export default superbWords;

/**
Get a random word.

@example
```
import {randomSuperbWord} from 'superb';

randomSuperbWord();
//=> 'legendary'

randomSuperbWord();
//=> 'awesome'
```
*/
export function randomSuperbWord(): string;
