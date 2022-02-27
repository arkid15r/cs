import { lomutoPartition } from 'algorithms/sort/quick-sort/partition';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Partition Test', function () {
	describe('lomutoPartition', () => {
		it('should ot change array with 1 element and return pivot 0', () => {
			const unsortedArray = [1];
			const expectedArray = [1];
			let pivot = lomutoPartition(unsortedArray);

			assert.isTrue(isEqual(expectedArray, unsortedArray));
			assert.isTrue(isEqual(pivot, 0));
		});

		it('should not switch two elements and return pivot 0', () => {
			const unsortedArray = [1, 0];
			const expectedArray = [0, 1];
			let pivot = lomutoPartition(unsortedArray);

			assert.isTrue(isEqual(expectedArray, unsortedArray));
			assert.isTrue(isEqual(pivot, 0));
		});

		it('should return pivot 4', () => {
			const unsortedArray = [1, 3, 10, 7, 2, 4, 9, 12, 5];
			const expectedArray = [1, 3, 2, 4, 5, 7, 9, 12, 10];
			let pivot = lomutoPartition(unsortedArray);

			assert.isTrue(isEqual(expectedArray, unsortedArray));
			assert.isTrue(isEqual(pivot, 4));
		});

		it('should return pivot 5', () => {
			const unsortedArray = [4, 2, 7, 1, 0, 10, 5, 6];
			const expectedArray = [4, 2, 1, 0, 5, 6, 7, 10];
			let pivot = lomutoPartition(unsortedArray);

			assert.isTrue(isEqual(expectedArray, unsortedArray));
			assert.isTrue(isEqual(pivot, 5));
		});
	});
});
