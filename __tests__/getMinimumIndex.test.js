/**
 * Test the minimum index function
 */

const getMinimumIndex = require('../getMinimumIndex');

describe('get minimum index function', () => {
  test('should find the minimum index and output 1', () => {
    expect(getMinimumIndex([3, 2, 1], 0)).toBe(2);
  });

  test('should find the minimum index and output ', () => {
    expect(getMinimumIndex([13, 7, 21, 52, -2, 6], 2)).toBe(4);
  });

  test('should find the minimum index and output ', () => {
    expect(getMinimumIndex([13, 7, 21, 52, -2, 6], 4)).toBe(4);
  });

  test('should find the minimum index and output ', () => {
    expect(getMinimumIndex([13, 7, 21, 52, 6], 0)).toBe(4);
  });

  test('should output -1 if the array is empty', () => {
    expect(getMinimumIndex([], 0)).toBe(-1);
  });
});
