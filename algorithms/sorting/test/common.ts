import { assert } from 'chai';
import { isEqual } from 'lodash';

export const runSortingTests = (
  name: string,
  sorter: { (a: Array<number>): void }
): void => {
  describe(name, () => {
    it('should not change array with one element', () => {
      const expectedArray = [0];
      const originalArray = [0];

      sorter(originalArray);
      assert.isTrue(isEqual(originalArray, expectedArray));
    });

    it('should not change array length', () => {
      const originalArray = [10, 3, 6, 2, 39];

      sorter(originalArray);
      assert.isTrue(isEqual(originalArray.length, 5));
    });

    it('should sort an array', () => {
      const expectedArray = [1, 2, 3, 5, 6, 6, 10, 23, 34, 39, 45];
      const originalArray = [10, 3, 6, 2, 39, 45, 5, 1, 34, 6, 23];

      sorter(originalArray);
      assert.isTrue(isEqual(originalArray, expectedArray));
    });
  });
};
