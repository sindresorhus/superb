import test from 'ava';
import fn from './';

test(t => {
	t.true(fn().length > 0);
	t.true(Array.isArray(fn.words));
	t.true(fn.words[3].length > 0);
});
