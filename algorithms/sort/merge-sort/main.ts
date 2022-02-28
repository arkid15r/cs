/* Merge sort. */

/* eslint-disable require-jsdoc */

import { Stats } from 'utils/stats';

export function mergeSort(array: Array<number>, stats?: Stats): void {
  if (array.length < 2) {
    return;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);

  mergeSort(left);
  mergeSort(right);

  let l = 0;
  let r = 0;
  let k = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      array[k] = left[l];
      l++;
    } else {
      array[k] = right[r];
      r++;
    }
    k++;
  }
  while (l < left.length) {
    array[k] = left[l];
    l++;
    k++;
  }
  while (r < right.length) {
    array[k] = right[r];
    r++;
    k++;
  }
}
