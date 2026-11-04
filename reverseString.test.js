import reverseString from './reverseString';

test('reverses a word', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('returns a single character unchanged', () => {
  expect(reverseString('a')).toBe('a');
});

test('handles an empty string', () => {
  expect(reverseString('')).toBe('');
});

test('keeps spaces and punctuation in the reversed order', () => {
  expect(reverseString('Hi there!')).toBe('!ereht iH');
});