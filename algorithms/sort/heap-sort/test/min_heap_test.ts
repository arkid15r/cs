import {
  bubbleDown,
  heapify,
  heapSort,
} from 'algorithms/sort/heap-sort/min_heap';
import { runHeapSortTests } from 'algorithms/sort/heap-sort/test/common';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Min Heap Sort', function () {
  describe('bubbleDown', () => {
    it('should return empty array when empty array given', () => {
      const unsortedArray = [];
      const expectedArray = [];
      bubbleDown(unsortedArray, unsortedArray.length, 0);
      assert.isTrue(isEqual(unsortedArray, expectedArray));
      assert.isTrue(isEqual(unsortedArray.length, 0));
    });

    it('should not change array with 1 element', () => {
      const unsortedArray = [0];
      const expectedArray = [0];
      bubbleDown(unsortedArray, unsortedArray.length, 0);
      assert.isTrue(isEqual(unsortedArray, expectedArray));
    });

    it('should not change array with where all elements in correct place', () => {
      const unsortedArray = [0, 3];
      const expectedArray = [0, 3];
      bubbleDown(unsortedArray, unsortedArray.length, 0);
      assert.isTrue(isEqual(unsortedArray, expectedArray));
    });

    it('should return array with element in correct position', () => {
      const unsortedArray = [1, 17, 11, 12, 10, 15, 35];
      const expectedArray = [1, 10, 11, 12, 17, 15, 35];
      bubbleDown(unsortedArray, unsortedArray.length, 1);
      assert.isTrue(isEqual(unsortedArray, expectedArray));
    });
  });
  describe('heapify', () => {
    it('should not change array with 1 element', () => {
      const unsortedArray = [0];
      const expectedArray = [0];
      heapify(unsortedArray);
      assert.isTrue(isEqual(unsortedArray, expectedArray));
    });

    it('should not change correct heap', () => {
      const unsortedArray = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
      const expectedArray = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
      heapify(unsortedArray);
      assert.isTrue(isEqual(unsortedArray, expectedArray));
    });

    it('should create depth 2 heap', () => {
      const unsortedArray = [35, 17, 15, 12, 10, 1, 11];
      const expectedArray = [1, 10, 11, 12, 17, 15, 35];
      heapify(unsortedArray);
      assert.isTrue(isEqual(unsortedArray, expectedArray));
    });

    it('should create depth 3 heap', () => {
      const unsortedArray = [35, 17, 15, 12, 10, 1, 11, 2, 45, 2, 57, 3];
      const expectedArray = [1, 2, 3, 12, 2, 15, 11, 17, 45, 10, 57, 35];
      heapify(unsortedArray);
      assert.isTrue(isEqual(unsortedArray, expectedArray));
    });
  });
  runHeapSortTests(heapSort);
});
