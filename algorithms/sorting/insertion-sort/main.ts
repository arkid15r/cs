/* Insertion sort. */

import { Stats } from 'utils/stats';

/* eslint-disable require-jsdoc */

export function insertionSort(array: Array<number>, stats?: Stats): void {
  stats && stats.setStartTime();

  let i;
  let j;
  let k;

  const size = array.length;
  for (i = 1; i < size; i++) {
    stats && stats.incIterations();

    k = array[i];
    stats && stats.incAccess();

    j = i - 1;
    while (j >= 0 && array[j] > k) {
      stats && stats.incIterations();
      array[j + 1] = array[j];
      j--;

      stats && stats.addAccess(2);
    }
    array[j + 1] = k;
    stats && stats.incAccess();
  }

  stats && stats.setEndTime();
}
