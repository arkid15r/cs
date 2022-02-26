/* Heap sort (min heap). */

import { swap } from 'utils/data';

/* eslint-disable require-jsdoc */

export function bubbleDown(
  array: Array<number>,
  size: number,
  position: number
): void {
  let smallest = position;
  const left = 2 * position + 1;
  const right = 2 * position + 2;

  if (left < size && array[left] < array[smallest]) {
    smallest = left;
  }

  if (right < size && array[right] < array[smallest]) {
    smallest = right;
  }

  if (smallest != position) {
    swap(array, smallest, position);
    bubbleDown(array, size, smallest);
  }
}

export function heapify(array: Array<number>): void {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    bubbleDown(array, array.length, i);
  }
}

export function heapSort(array: Array<number>): void {
  heapify(array);

  const size = array.length;
  for (let i = size - 1; i > 0; i--) {
    swap(array, i, 0);
    bubbleDown(array, i, 0);
  }

  for (let i = 0; i < Math.floor(size / 2); i++) {
    swap(array, i, size - i - 1);
  }
}
