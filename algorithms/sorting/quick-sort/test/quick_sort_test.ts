import { partition, quickSort } from 'algorithms/sorting/quick-sort/quick-sort';
import { runSortingTests } from 'algorithms/sorting/test/common';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Quick Sort & Partition Test', function () {
	describe('partition', () => {
		it('should not change array with 1 element and return pivot 0', () => {
			const expectedArray = [1];
			const originalArray = [1];
			const pivot = partition(originalArray, 0, originalArray.length - 1);

			assert.isTrue(isEqual(expectedArray, originalArray));
			assert.isTrue(isEqual(pivot, 0));
		});

		it('should not switch two elements and return pivot 0', () => {
			const expectedArray = [0, 1];
			const originalArray = [1, 0];
			const pivot = partition(originalArray, 0, originalArray.length - 1);

			assert.isTrue(isEqual(expectedArray, originalArray));
			assert.isTrue(isEqual(pivot, 0));
		});

		it('should return pivot 4', () => {
			const expectedArray = [1, 3, 2, 4, 5, 7, 9, 12, 10];
			const originalArray = [1, 3, 10, 7, 2, 4, 9, 12, 5];
			const pivot = partition(originalArray, 0, originalArray.length - 1);

			assert.isTrue(isEqual(expectedArray, originalArray));
			assert.isTrue(isEqual(pivot, 4));
		});

		it('should return pivot 5', () => {
			const expectedArray = [4, 2, 1, 0, 5, 6, 7, 10];
			const originalArray = [4, 2, 7, 1, 0, 10, 5, 6];
			const pivot = partition(originalArray, 0, originalArray.length - 1);

			assert.isTrue(isEqual(expectedArray, originalArray));
			assert.isTrue(isEqual(pivot, 5));
		});
	});

	runSortingTests('Quick Sort', quickSort);
});
