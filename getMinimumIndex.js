/**
 * Get the minimum index of an array
 * @param array
 * @param startIndex
 * It will compare other items against the start index and output a minimum index
 * It will return an index
 * It will also mutate the array
 */

function getMinimumIndex(array, startIndex) {
  if (!array.length) return -1;

  // Set the min value to the start index
  let minValue = array[startIndex];
  let minIndex = startIndex;
  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      minIndex = i;
    }
  }
  return minIndex;
}

module.exports = getMinimumIndex;
