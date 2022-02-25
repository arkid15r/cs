/* Heap sort. */

/* eslint-disable require-jsdoc */

import { swap } from 'utils/data';

export function bubbleDown(arr: Array<number>, n: number, i: number): void {
  let largest = i;
  const leftChild = 2 * i + 1;
  const rightChild = 2 * i + 2;

  if (leftChild < n && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  if (rightChild < n && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if (largest != i) {
    swap(arr, i, largest);
    bubbleDown(arr, n, largest);
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
