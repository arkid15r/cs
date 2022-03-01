import { swap } from 'utils/data';

export function _partition(array: Array<number>, l: number, r: number): number {
	let pivot: number = r;
	let i: number = l - 1;

	for (let j = l; j <= r; j++) {
		if (array[j] < array[pivot]) {
			swap(array, j, i + 1);
			i++;
		}
	}
	swap(array, pivot, i + 1);

	return i + 1;
}

export function quickSelect(
	array: Array<number>,
	l: number,
	r: number,
	k: number
): number {
	let partition: number = _partition(array, l, r);
	if (k - 1 == partition) {
		return array[partition];
	} else if (k - 1 > partition) {
		return quickSelect(array, partition + 1, r, k);
	} else {
		return quickSelect(array, l, partition - 1, k);
	}
}
