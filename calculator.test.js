import calculator from './calculator';

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });

  test('adds decimals', () => {
    expect(calculator.add(0.5, 0.25)).toBeCloseTo(0.75);
  });
});

describe('subtract', () => {
  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('can return a negative result', () => {
    expect(calculator.subtract(3, 5)).toBe(-2);
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  test('multiplying by zero gives zero', () => {
    expect(calculator.multiply(4, 0)).toBe(0);
  });
});

describe('divide', () => {
  test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('returns a decimal when needed', () => {
    expect(calculator.divide(1, 4)).toBe(0.25);
  });

  test('throws when dividing by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
  });
});