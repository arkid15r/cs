/* Insertion sort. */

export function insertionSort(arr, stats) {
  let i, j, k, size;

  size = arr.length;
  for (i = 1; i < size; i++) {
    stats.incIterations();
    k = arr[i];
    stats.incAccess();
    j = i - 1;
    while (j >= 0 && arr[j] > k) {
      stats.incIterations();
      arr[j + 1] = arr[j];
      stats.addAccess(2);
      j--;
    }
    arr[j + 1] = k;
    stats.incAccess();
  }
}
