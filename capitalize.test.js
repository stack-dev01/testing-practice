import capitalize from './capitalize';

test('capitalizes the first character', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('leaves an already capitalized string alone', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('handles an empty string', () => {
  expect(capitalize('')).toBe('');
});