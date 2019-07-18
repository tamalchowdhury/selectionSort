/**
 * Selection sort function
 * @param array takes and array
 * Outputs the sorted array
 */

const getMinimumIndex = require('./getMinimumIndex');
const swap = require('./swap');

function selectionSort(array) {
  let minIndex;
  for (let i = 0; i < array.length; i++) {
    minIndex = getMinimumIndex(array, i);
    swap(array, i, minIndex);
  }
  return array;
}

module.exports = selectionSort;
