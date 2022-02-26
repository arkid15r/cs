/* Heap sort. */

/* eslint-disable require-jsdoc */

import { swap } from 'utils/data';

export function bubbleDown(
  array: Array<number>,
  size: number,
  position: number
): void {
  let largest = position;
  const leftChild = 2 * position + 1;
  const rightChild = 2 * position + 2;

  if (leftChild < size && array[leftChild] > array[largest]) {
    largest = leftChild;
  }

  if (rightChild < size && array[rightChild] > array[largest]) {
    largest = rightChild;
  }

  if (largest != position) {
    swap(array, position, largest);
    bubbleDown(array, size, largest);
  }
}

export function heapify(arr: Array<number>): void {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    bubbleDown(arr, arr.length, i);
  }
}

export function heapSort(arr: Array<number>): void {
  heapify(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, 0);
    bubbleDown(arr, i, 0);
  }
}
