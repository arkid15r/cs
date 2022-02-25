import { assert, should as _should } from 'chai';
import { heapSort } from 'algorithms/sort/heap-sort/default';
import { heapify } from 'algorithms/sort/heap-sort/default';
import { isEqual } from 'lodash';

const should = _should(); // eslint-disable-line no-unused-vars

describe('Heap Sort', function () {
	describe('heapify', () => {
		it('should return empty array', () => {
			const unsortedArray = [];
			const expectedArray = [];
			heapify(unsortedArray);
			assert.isTrue(isEqual(unsortedArray, expectedArray));
		});

		it('should not change array with 1 element', () => {
			const unsortedArray = [0];
			const expectedArray = [0];
			heapify(unsortedArray);
			assert.isTrue(isEqual(unsortedArray, expectedArray));
		});

		it('should not change correct heap', () => {
			const unsortedArray = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
			const expectedArray = [35, 19, 25, 14, 18, 15, 11, 13, 12, 10, 17, 1];
			heapify(unsortedArray);
			assert.isTrue(isEqual(unsortedArray, expectedArray));
		});

		it('should create depth 2 heap', () => {
			const unsortedArray = [35, 17, 15, 12, 10, 1, 11];
			const expectedArray = [35, 17, 15, 12, 10, 1, 11];
			heapify(unsortedArray);
			assert.isTrue(isEqual(unsortedArray, expectedArray));
		});

		it('should create depth 3 heap', () => {
			const unsortedArray = [35, 17, 15, 12, 10, 1, 11, 2, 45, 2, 57, 3];
			const expectedArray = [57, 45, 15, 35, 17, 3, 11, 2, 12, 2, 10, 1];
			heapify(unsortedArray);
			assert.isTrue(isEqual(unsortedArray, expectedArray));
		});

		describe('heapSort', () => {
			it('should return empty array', () => {
				const unsortedArray = [];
				const expectedArray = [];
				heapSort(unsortedArray);
				assert.isTrue(isEqual(unsortedArray, expectedArray));
			});

			it('should return same array for an array with one element', () => {
				const unsortedArray = [0];
				const expectedArray = [0];
				heapSort(unsortedArray);
				assert.isTrue(isEqual(unsortedArray, expectedArray));
			});

			it('should return array of length 5', () => {
				const unsortedArray = [10, 3, 6, 2, 39];
				const expectedArray = [2, 3, 6, 10, 39];
				heapSort(unsortedArray);
				assert.isTrue(isEqual(unsortedArray.length, 5));
			});

			it('should return sorted array', () => {
				const unsortedArray = [10, 3, 6, 2, 39, 45, 5, 1, 34, 6, 23];
				const expectedArray = [1, 2, 3, 5, 6, 6, 10, 23, 34, 39, 45];
				heapSort(unsortedArray);
				assert.isTrue(isEqual(unsortedArray, expectedArray));
			});
		});
	});
});
