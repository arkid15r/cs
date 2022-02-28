/* Bubble sort. */

/* eslint-disable require-jsdoc */

import { swap } from 'utils/data';
import { Stats } from 'utils/stats';

export function bubbleSort(array: Array<number>, stats?: Stats): void {
  const size: number = array.length;

  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}
