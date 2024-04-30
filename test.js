import test from 'ava';
import superbWords, {randomSuperbWord} from './index.js';

test('main', t => {
	t.true(Array.isArray(superbWords));
	t.true(superbWords[3].length > 0);
	t.true(randomSuperbWord().length > 0);
});
