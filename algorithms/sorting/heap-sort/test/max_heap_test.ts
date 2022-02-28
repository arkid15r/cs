import { heapify, heapSort } from 'algorithms/sorting/heap-sort/max_heap';
import { runSortingTests } from 'algorithms/sorting/test/common';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Max Heap Sort', function () {
  describe('heapify', () => {
    it('should not change array with 1 element', () => {
      const expectedArray = [0];
      const originalArray = [0];

      heapify(originalArray);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should not change correct heap', () => {
      const expectedArray = [35, 19, 25, 14, 18, 15, 11, 13, 12, 10, 17, 1];
      const originalArray = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];

      heapify(originalArray);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should create depth 2 heap', () => {
      const expectedArray = [35, 17, 15, 12, 10, 1, 11];
      const originalArray = [35, 17, 15, 12, 10, 1, 11];

      heapify(originalArray);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should create depth 3 heap', () => {
      const expectedArray = [57, 45, 15, 35, 17, 3, 11, 2, 12, 2, 10, 1];
      const originalArray = [35, 17, 15, 12, 10, 1, 11, 2, 45, 2, 57, 3];

      heapify(originalArray);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });
  });

  runSortingTests('Max Heap Sort', heapSort);
});
