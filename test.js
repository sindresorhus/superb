import test from 'ava';
import m from '.';

test(t => {
	t.true(m().length > 0);
	t.true(Array.isArray(m.words));
	t.true(m.words[3].length > 0);
});
