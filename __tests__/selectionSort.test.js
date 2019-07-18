/**
 * Selection sort test file
 */

const selectionSort = require('../selectionSort');

describe('selection sort function', () => {
  test('should sort [1, 3, 2] and output [1, 2, 3]', () => {
    expect(selectionSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  test('should sort [5, 4, 3, 2, 1] and output [1, 2, 3, 4, 5]', () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort [10,20,50,30,40] and output [10, 20, 30, 40, 50]', () => {
    expect(selectionSort([10, 20, 50, 30, 40])).toEqual([10, 20, 30, 40, 50]);
  });

  test('should sort [0, 0, 5, -3, -22, 2, 3] and output [-22, -3, 0, 0, 2, 3, 5]', () => {
    expect(selectionSort([0, 0, 5, -3, -22, 2, 3])).toEqual([
      -22,
      -3,
      0,
      0,
      2,
      3,
      5
    ]);
  });
});
