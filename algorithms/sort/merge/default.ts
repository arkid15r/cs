/* Merge sort. */

/* eslint-disable require-jsdoc */

import { swap } from '../utils';

export function mergeSort(array, stats) {
  function copyArray(src, dst, left, right) {
    for (let i = left; i <= right; i++) {
      dst[i] = src[i - left];
    }
  }

  function merge(array, left, mid, right) {
    // if (left > mid || mid > right) {
    //   return;
    // }

    let p1 = left;
    let p2 = mid + 1;

    const res = [];
    while (p1 <= mid || p2 <= right) {
      if (p1 <= mid && p2 <= right) {
        if (array[p1] <= array[p2]) {
          res.push(array[p1]);
          p1++;
        } else {
          res.push(array[p2]);
          p2++;
        }
      } else if (p1 <= mid) {
        res.push(array[p1]);
        p1++;
      } else {
        res.push(array[p2]);
        p2++;
      }
    }

    copyArray(res, array, left, right);
  }

  function divide(left, right) {
    if (left == right) {
      return;
    } else if (left + 1 == right) {
      if (array[left] > array[right]) {
        swap(array, left, right);
      }
    } else {
      const mid = Math.floor((left + right) / 2);
      divide(left, mid);
      divide(mid + 1, right);
      // console.log(`\n${array}\n`);
      merge(array, left, mid, right);
    }
  }

  const last = array.length - 1;
  divide(0, last);
}
