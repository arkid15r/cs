import { heapify, heapSort } from 'algorithms/sorting/heap-sort/max_heap';
import { runSortingTests } from 'algorithms/sorting/test/common';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Max Heap Sort', function () {
  describe('heapify', () => {
    it('should not change array with 1 element', () => {
      const expectedArray = [0];
      const originalArray = [0];

      heapify(originalArray, originalArray.length, 0);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should not change a correct heap', () => {
      const expectedArray = [3, 0];
      const originalArray = [3, 0];

      heapify(originalArray, originalArray.length, 0);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should create depth 2 heap', () => {
      const expectedArray = [35, 17, 15, 12, 10, 1, 11];
      const originalArray = [17, 35, 15, 12, 10, 1, 11];

      heapify(originalArray, originalArray.length, 0);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should create depth 3 heap', () => {
      const expectedArray = [57, 45, 17, 35, 10, 15, 11, 1, 2, 2, 10, 3];
      const originalArray = [35, 57, 15, 1, 10, 17, 11, 45, 2, 2, 10, 3];

      for (let i = Math.floor(originalArray.length / 2) - 1; i >= 0; i--) {
        heapify(originalArray, originalArray.length, i);
      }
      assert.isTrue(isEqual(expectedArray, originalArray));
    });
  });

  runSortingTests('Max Heap Sort', heapSort);
});
