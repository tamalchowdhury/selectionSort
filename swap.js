/**
 * @param array
 * @param firstIndex
 * @param secondIndex
 * It will swap first index with second index
 * It will mutate the original array
 */

function swap(array, firstIndex, secondIndex) {
  if (!array.length) return -1;

  // Temporary hold the item
  let temp = array[firstIndex];
  // Swap the first one with the second one
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
  return array;
}

module.exports = swap;
