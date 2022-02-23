/* Bubble sort. */

import { swap } from 'algorithms/sort/utils';

export function bubbleSort(array: number[], stats?) {
  const size: number = array.length;
  const test = array[array.length];
  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}
