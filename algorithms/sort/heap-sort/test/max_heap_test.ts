import { heapify, heapSort } from 'algorithms/sort/heap-sort/max_heap';
import { runHeapSortTests } from 'algorithms/sort/heap-sort/test/common';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Max Heap Sort', function () {
  describe('heapify', () => {
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
  });

  runHeapSortTests(heapSort);
});
