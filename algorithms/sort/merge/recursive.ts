/* Merge sort. */

export function mergeSort(array, stats?) {
  if (array.length < 2) {
    return;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  mergeSort(left);
  mergeSort(right);

  let l = 0,
    r = 0,
    k = 0;

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
  while (l < mid) {
    array[k] = left[l];
    l++;
    k++;
  }
  while (r < right) {
    array[k] = right[r];
    r++;
    k++;
  }
}
