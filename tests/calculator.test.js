// tests/calculator.test.js

const calculateAverage = require('../src/calculator');

describe('calculateAverage', () => {
  test('should return correct average for positive numbers', () => {
    const result = calculateAverage([1, 2, 3, 4, 5]);
    expect(result).toBe(3);
  });

  test('should return correct average for negative numbers', () => {
    const result = calculateAverage([-1, -2, -3, -4, -5]);
    expect(result).toBe(-3);
  });

  test('should return 0 for an empty array', () => {
    const result = calculateAverage([]);
    expect(result).toBe(0);
  });

  test('should throw an error if input is not an array', () => {
    expect(() => calculateAverage('string')).toThrow('Input must be an array');
  });

  test('should handle array with one element', () => {
    const result = calculateAverage([42]);
    expect(result).toBe(42);
  });
});
