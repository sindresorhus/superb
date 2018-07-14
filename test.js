import test from 'ava';
import superb from '.';

test('main', t => {
	t.true(superb().length > 0);
	t.true(Array.isArray(superb.words));
	t.true(superb.words[3].length > 0);
});
