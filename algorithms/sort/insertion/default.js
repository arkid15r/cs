/* Insertion sort. */
/* eslint-disable require-jsdoc */

export function insertionSort(arr, stats) {
  stats.setStartTime();

  let i;
  let j;
  let k;

  const size = arr.length;
  for (i = 1; i < size; i++) {
    stats.incIterations();

    k = arr[i];
    stats.incAccess();

    j = i - 1;
    while (j >= 0 && arr[j] > k) {
      stats.incIterations();
      arr[j + 1] = arr[j];
      j--;

      stats.addAccess(2);
    }
    arr[j + 1] = k;
    stats.incAccess();
  }

  stats.setEndTime();
}
