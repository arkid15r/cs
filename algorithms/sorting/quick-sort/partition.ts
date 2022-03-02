/* Partition for Quick sort. */

/* eslint-disable require-jsdoc */

import { swap } from 'utils/data';

export function lomutoPartition(array: Array<number>): number {
  const pivot = array.length - 1;
  let i = -1;

  for (let j = 0; j <= array.length - 1; j++) {
    if (array[j] < array[pivot]) {
      swap(array, i + 1, j);
      i++;
    }
  }
  swap(array, i + 1, pivot);
  return i + 1;
}
