/* Quick sort. */

/* eslint-disable require-jsdoc */

import { swap } from 'utils/data';

export function partition(array: Array<number>, l: number, r: number): number {
	let pivot: number = r;
	let i: number = l - 1;

	for (let j = l; j <= r - 1; j++) {
		if (array[j] < array[pivot]) {
			swap(array, j, i + 1);
			i++;
		}
	}
	swap(array, pivot, i + 1);

	return i + 1;
}

export function quickSort(array: Array<number>): void {
	function search(array: Array<number>, l: number, r: number): void {
		if (l < r) {
			let p: number = partition(array, l, r);

			search(array, l, p - 1);
			search(array, p + 1, r);
		}
	}

	search(array, 0, array.length - 1);
}
