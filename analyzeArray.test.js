import analyzeArray from './analyzeArray';

test('analyzes the example array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('handles a single element', () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test('handles negative numbers', () => {
  expect(analyzeArray([-2, -4, 0])).toEqual({
    average: -2,
    min: -4,
    max: 0,
    length: 3,
  });
});