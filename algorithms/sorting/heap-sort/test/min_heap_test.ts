import {
  bubbleDown,
  heapify,
  heapSort,
} from 'algorithms/sorting/heap-sort/min_heap';
import { runSortingTests } from 'algorithms/sorting/test/common';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Min Heap Sort', function () {
  describe('bubbleDown', () => {
    it('should return empty array when empty array given', () => {
      const expectedArray: Array<number> = [];
      const originalArray: Array<number> = [];

      bubbleDown(originalArray, originalArray.length, 0);
      assert.isTrue(isEqual(expectedArray, originalArray));
      assert.isTrue(isEqual(originalArray.length, 0));
    });

    it('should not change array with 1 element', () => {
      const expectedArray = [0];
      const originalArray = [0];

      bubbleDown(originalArray, originalArray.length, 0);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should not change array that has elements in correct order', () => {
      const expectedArray = [0, 3];
      const originalArray = [0, 3];

      bubbleDown(originalArray, originalArray.length, 0);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should return array with element in correct position', () => {
      const expectedArray = [1, 10, 11, 12, 17, 15, 35];
      const originalArray = [1, 17, 11, 12, 10, 15, 35];

      bubbleDown(originalArray, originalArray.length, 1);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });
  });

  describe('heapify', () => {
    it('should not change array with 1 element', () => {
      const expectedArray = [0];
      const originalArray = [0];

      heapify(originalArray);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should not change correct heap', () => {
      const expectedArray = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
      const originalArray = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];

      heapify(originalArray);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should create depth 2 heap', () => {
      const expectedArray = [1, 10, 11, 12, 17, 15, 35];
      const originalArray = [35, 17, 15, 12, 10, 1, 11];

      heapify(originalArray);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });

    it('should create depth 3 heap', () => {
      const expectedArray = [1, 2, 3, 12, 2, 15, 11, 17, 45, 10, 57, 35];
      const originalArray = [35, 17, 15, 12, 10, 1, 11, 2, 45, 2, 57, 3];

      heapify(originalArray);
      assert.isTrue(isEqual(expectedArray, originalArray));
    });
  });

  runSortingTests('Min Heap Sort', heapSort);
});
