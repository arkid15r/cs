/* Max heap sort. */

/* eslint-disable require-jsdoc */

import { swap } from 'utils/data';

export function heapify(
  array: Array<number>,
  size: number,
  position: number
): void {
  const left = 2 * position + 1;
  const right = 2 * position + 2;

  let largest = position;
  if (left < size && array[left] > array[largest]) {
    largest = left;
  }

  if (right < size && array[right] > array[largest]) {
    largest = right;
  }

  if (largest != position) {
    swap(array, position, largest);
    heapify(array, size, largest);
  }
}

export function heapSort(arr: Array<number>): void {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, 0);
    heapify(arr, i, 0);
  }
}
