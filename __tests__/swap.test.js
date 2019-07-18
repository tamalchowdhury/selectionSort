/**
 * Test the swap function
 */

const swap = require('../swap');

describe('swap function', () => {
  test('should swap [1,2,3] into [2, 1, 3]', () => {
    expect(swap([1, 2, 3], 0, 1)).toEqual([2, 1, 3]);
  });

  test('should swap [1, 2, 3, 4, 5] into [1, 5, 3, 4, 2]', () => {
    expect(swap([1, 2, 3, 4, 5], 1, 4)).toEqual([1, 5, 3, 4, 2]);
  });

  test('should swap ["apple", "google", "facebook"] into ["facebook", "google", "apple"]', () => {
    expect(swap(['apple', 'google', 'facebook'], 0, 2)).toEqual([
      'facebook',
      'google',
      'apple'
    ]);
  });

  test('should return -1 for an empty array', () => {
    expect(swap([], 0, 0)).toBe(-1);
  });
});
