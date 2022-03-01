import {
	_partition,
	quickSelect,
} from 'algorithms/selection/quick-select/quick_select';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Quick Select', function () {
	describe('partition', () => {
		it('should not change array with 1 element and return pivot 0', () => {
			const expectedArray = [1];
			const originalArray = [1];
			const pivot = _partition(originalArray, 0, originalArray.length - 1);

			assert.isTrue(isEqual(expectedArray, originalArray));
			assert.isTrue(isEqual(pivot, 0));
		});

		it('should switch two elements and return pivot 0', () => {
			const expectedArray = [0, 1];
			const originalArray = [1, 0];
			const pivot = _partition(originalArray, 0, originalArray.length - 1);

			assert.isTrue(isEqual(expectedArray, originalArray));
			assert.isTrue(isEqual(pivot, 0));
		});

		it('should return pivot 4', () => {
			const expectedArray = [1, 3, 2, 4, 5, 7, 9, 12, 10];
			const originalArray = [1, 3, 10, 7, 2, 4, 9, 12, 5];
			const pivot = _partition(originalArray, 0, originalArray.length - 1);

			assert.isTrue(isEqual(expectedArray, originalArray));
			assert.isTrue(isEqual(pivot, 4));
		});

		it('should return pivot 5', () => {
			const expectedArray = [4, 2, 1, 0, 5, 6, 7, 10];
			const originalArray = [4, 2, 7, 1, 0, 10, 5, 6];
			const pivot = _partition(originalArray, 0, originalArray.length - 1);
			assert.isTrue(isEqual(expectedArray, originalArray));
			assert.isTrue(isEqual(pivot, 5));
		});
	});

	describe('quickSelect', () => {
		it('should return same element for array with a single element', () => {
			const originalArray = [1];
			const select = quickSelect(originalArray, 0, originalArray.length - 1, 1);
			assert.isTrue(isEqual(select, 1));
		});

		it('should return 1 for 2nd smallest element', () => {
			const originalArray = [1, 0, 3, 6];
			const select = quickSelect(originalArray, 0, originalArray.length - 1, 2);
			assert.isTrue(isEqual(select, 1));
		});

		it('should return 2 for 3d smallest element', () => {
			const originalArray = [6, 2, 1, 0, 8, 4];
			const select = quickSelect(originalArray, 0, originalArray.length - 1, 3);
			assert.isTrue(isEqual(select, 2));
		});

		it('should return 1 for 2nd smallest element', () => {
			const originalArray = [1, 2, 3, 0, 8, 4];
			const select = quickSelect(originalArray, 0, originalArray.length - 1, 2);
			assert.isTrue(isEqual(select, 1));
		});

		it('should return 1 for 2nd smallest element', () => {
			const originalArray = [4, 2, 3, 0, 8, 1];
			const select = quickSelect(originalArray, 0, originalArray.length - 1, 2);
			assert.isTrue(isEqual(select, 1));
		});
	});
});
