/* eslint-disable require-jsdoc */

export function binarySearch(array, item) {
  let left;
  let mid;
  let right;

  const last = array.length - 1;
  if (item < array[0] || item > array[last]) {
    return false;
  }

  left = 0;
  right = last;

  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (item == array[mid]) {
      return true;
    }

    if (item < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
