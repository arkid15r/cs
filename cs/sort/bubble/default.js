/* Bubble sort. */

import { swap } from "../utils.js";

export function bubbleSort(arr, stats) {
  stats.setStartTime();

  let size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      stats.incIterations();

      stats.addAccess(2);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        stats.addAccess(2);
      }
    }
  }

  stats.setEndTime();
}
