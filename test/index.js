import test from 'ava';
import removeTrailingSeparator from '..';

test('strip trailing separator:', t => {
	t.is(removeTrailingSeparator('foo/'), 'foo');
	t.is(removeTrailingSeparator('foo\\'), 'foo');
});

test('don\'t strip when it\'s the only char in the string', t => {
	t.is(removeTrailingSeparator('/'), '/');
	t.is(removeTrailingSeparator('\\'), '\\');
});

test('strip only trailing separator:', t => {
	t.is(removeTrailingSeparator('/test/foo/bar/'), '/test/foo/bar');
	t.is(removeTrailingSeparator('\\test\\foo\\bar\\'), '\\test\\foo\\bar');
});

test('strip multiple trailing separators', t => {
	t.is(removeTrailingSeparator('/test//'), '/test');
	t.is(removeTrailingSeparator('\\test\\\\'), '\\test');
});

test('leave 1st separator in a string of only separators', t => {
	t.is(removeTrailingSeparator('//'), '/');
	t.is(removeTrailingSeparator('////'), '/');
	t.is(removeTrailingSeparator('\\\\'), '\\');
	t.is(removeTrailingSeparator('\\\\\\\\'), '\\');
});

test('return back empty string', t => {
	t.is(removeTrailingSeparator(''), '');
});
