/* Min heap sort. */

import { swap } from 'utils/data';

/* eslint-disable require-jsdoc */

export function heapify(
  array: Array<number>,
  size: number,
  position: number
): void {
  const left = 2 * position + 1;
  const right = 2 * position + 2;

  let smallest = position;
  if (left < size && array[left] < array[smallest]) {
    smallest = left;
  }

  if (right < size && array[right] < array[smallest]) {
    smallest = right;
  }

  if (smallest != position) {
    swap(array, position, smallest);
    heapify(array, size, smallest);
  }
}

export function heapSort(array: Array<number>): void {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, array.length, i);
  }

  for (let i = array.length - 1; i > 0; i--) {
    swap(array, i, 0);
    heapify(array, i, 0);
  }

  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    swap(array, i, array.length - i - 1);
  }
}
