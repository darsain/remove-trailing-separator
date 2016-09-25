import test from 'ava';
import removeTrailingSeparator from '..';

const isWin = process.platform === 'win32';

test('strip trailing separator:', t => {
	t.is(removeTrailingSeparator('foo/'), 'foo');
	let platformExpected = isWin ? 'foo' : 'foo\\';
	t.is(removeTrailingSeparator('foo\\'), platformExpected);
});

test('don\'t strip when it\'s the only char in the string', t => {
	t.is(removeTrailingSeparator('/'), '/');
	t.is(removeTrailingSeparator('\\'), '\\');
});

test('strip only trailing separator:', t => {
	t.is(removeTrailingSeparator('/test/foo/bar/'), '/test/foo/bar');
	let platformExpected = isWin ? '\\test\\foo\\bar' : '\\test\\foo\\bar\\';
	t.is(removeTrailingSeparator('\\test\\foo\\bar\\'), platformExpected);
});

test('strip multiple trailing separators', t => {
	t.is(removeTrailingSeparator('/test//'), '/test');
	let platformExpected = isWin ? '\\test' : '\\test\\\\';
	t.is(removeTrailingSeparator('\\test\\\\'), platformExpected);
});

test('leave 1st separator in a string of only separators', t => {
	t.is(removeTrailingSeparator('////'), '/');
	let platformExpected = isWin ? '\\' : '\\\\\\\\';
	t.is(removeTrailingSeparator('\\\\\\\\'), platformExpected);
});

test('return back empty string', t => {
	t.is(removeTrailingSeparator(''), '');
});
