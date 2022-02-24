/* eslint-disable require-jsdoc */

export function binarySearch(array, item) {
  function search(array, item, left, right) {
    if (left > right) {
      return false;
    }

    const mid = Math.floor((left + right) / 2);
    if (item == array[mid]) {
      return true;
    } else if (item < array[mid]) {
      return search(array, item, left, mid - 1);
    } else {
      return search(array, item, mid + 1, right);
    }
  }

  if (item < array[0] || item > array[array.length - 1]) {
    return false;
  }

  return search(array, item, 0, array.length - 1);
}
