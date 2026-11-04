import caesarCipher from './caesarCipher';

test('shifts letters forward', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('leaves punctuation and spaces unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('supports negative shifts', () => {
  expect(caesarCipher('abc', -3)).toBe('xyz');
});