import { assert } from 'chai';
import { isEqual } from 'lodash';

export const runHeapSortTests = (heapSort: {
  (a: Array<number>): void;
}): void => {
  describe('heapSort', () => {
    it('should return same array for an array with one element', () => {
      const unsortedArray = [0];
      const expectedArray = [0];
      heapSort(unsortedArray);
      assert.isTrue(isEqual(unsortedArray, expectedArray));
    });

    it('should return array of length 5', () => {
      const unsortedArray = [10, 3, 6, 2, 39];
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
};
