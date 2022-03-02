import { partition, quickSort } from 'algorithms/sorting/quick-sort/quick-sort';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Partition Test', function () {
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
});

describe('Quick Sort', function () {
	describe('quicksort', () => {
		it('should return empty list', () => {
			const expectedArray = [];
			const originalArray = [];

			quickSort(originalArray, 0, originalArray.length - 1);
			assert.isTrue(isEqual(expectedArray, originalArray));
		});

		it('should return the same list for a list of 1 element', () => {
			const expectedArray = [1];
			const originalArray = [1];

			quickSort(originalArray, 0, originalArray.length - 1);
			assert.isTrue(isEqual(expectedArray, originalArray));
		});

		it('should return sorted list of length 3', () => {
			const expectedArray = [1, 2, 4];
			const originalArray = [4, 1, 2];

			quickSort(originalArray, 0, originalArray.length - 1);
			assert.isTrue(isEqual(expectedArray, originalArray));
			assert.isTrue(isEqual(3, originalArray.length));
		});

		it('should return sorted list of length 8', () => {
			const expectedArray = [1, 2, 4, 5, 7, 13, 23, 43];
			const originalArray = [4, 23, 5, 7, 1, 13, 43, 2];

			quickSort(originalArray, 0, originalArray.length - 1);
			assert.isTrue(isEqual(expectedArray, originalArray));
			assert.isTrue(isEqual(8, originalArray.length));
		});
	});
});
