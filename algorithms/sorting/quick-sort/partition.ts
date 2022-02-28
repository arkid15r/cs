/* Partition for Quick sort. */

/* eslint-disable require-jsdoc */

import { swap } from 'utils/data';

export function lomutoPartition(array: Array<number>): number {
	let pivot: number = array.length - 1;
	let i: number = -1;

	for (let j: number = 0; j <= array.length - 1; j++) {
		if (array[j] < array[pivot]) {
			swap(array, i + 1, j);
			i++;
		}
	}
	swap(array, i + 1, pivot);
	return i + 1;
}
