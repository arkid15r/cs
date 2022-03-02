import { heapify, heapSort } from 'algorithms/sorting/heap-sort/min_heap';
import { runSortingTests } from 'algorithms/sorting/test/common';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Min Heap Sort', function () {
  describe('heapify', () => {
    it('should return empty array when empty array given', () => {
      const expectedArray: Array<number> = [];
      const originalArray: Array<number> = [];

      heapify(originalArray, originalArray.length, 0);
      assert.isTrue(isEqual(expectedArray, originalArray));
      assert.isTrue(isEqual(originalArray.length, 0));
    });

    it('should not change array with 1 element', () => {
      const expectedArray = [0];
      const originalArray = [0];

      heapify(originalArray, originalArray.length, 0);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should not change array that has elements in correct order', () => {
      const expectedArray = [0, 3];
      const originalArray = [0, 3];

      heapify(originalArray, originalArray.length, 0);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should return array with element in correct position', () => {
      const expectedArray = [1, 10, 11, 12, 17, 15, 35];
      const originalArray = [1, 17, 11, 12, 10, 15, 35];

      heapify(originalArray, originalArray.length, 1);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should not change correct heap', () => {
      const expectedArray = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
      const originalArray = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];

      heapify(originalArray, originalArray.length, 0);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });
  });

  runSortingTests('Min Heap Sort', heapSort);
});
