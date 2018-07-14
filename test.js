import test from 'ava';
import superb from '.';

test('main', t => {
	t.true(superb.random().length > 0);
	t.true(Array.isArray(superb.all));
	t.true(superb.all[3].length > 0);
});
