/* Merge sort. */

/* eslint-disable require-jsdoc */

import { swap } from 'utils/data';
import { Stats } from 'utils/stats';

export function mergeSort(array: Array<number>, stats?: Stats): void {
  function copyArray(
    src: Array<number>,
    dst: Array<number>,
    left: number,
    right: number
  ): void {
    for (let i = left; i <= right; i++) {
      dst[i] = src[i - left];
    }
  }

  function merge(
    array: Array<number>,
    left: number,
    mid: number,
    right: number
  ): void {
    // if (left > mid || mid > right) {
    //   return;
    // }

    let p1 = left;
    let p2 = mid + 1;

    const res = new Array<number>();
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

  function divide(left: number, right: number): void {
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
