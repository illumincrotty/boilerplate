import test from 'ava';
import { identity } from '../src/index';

test('passing test', (t) => {
	t.pass();
});

test('should know 1 == 1', (t) => {
	t.is(1, 1);
});

test('should work with named imports', (t) => {
	const test = { property: 7 };
	t.deepEqual(identity(test)(), test);
	t.is(1, 1);
	t.is(2, 2);
});

test('can dynamically import fs', async (t) => {
	const fs = (await import('node:fs')).promises;
	const text = await fs.readFile('./test/example.txt');
	t.is(text.BYTES_PER_ELEMENT, 1);
});
