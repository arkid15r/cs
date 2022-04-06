/** Symmetric difference tests. */

import { assert, should as _should } from 'chai';
import { isEqual } from 'lodash';
import { largestSumSubArray } from 'problems/largest-sum-subarray/main';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = _should();

describe('largestSumSubArray', () => {
  it('should return an empty subarray', () => {
    assert.isTrue(isEqual(largestSumSubArray([]), []));
  });

  it('should return a single item subarray', () => {
    assert.isTrue(isEqual(largestSumSubArray([0, 0, 0]), [0]));
    assert.isTrue(isEqual(largestSumSubArray([0]), [0]));
  });

  it('should return a largest sum subarray', () => {
    assert.isTrue(isEqual(largestSumSubArray([1, 1, 1]), [1, 1, 1]));
    assert.isTrue(isEqual(largestSumSubArray([-2, -3, -4, -5]), [-2]));
    assert.isTrue(isEqual(largestSumSubArray([-10, -2, -5, -19]), [-2]));
    assert.isTrue(isEqual(largestSumSubArray([-5, 10, 1, -10, 2, 5]), [10, 1]));
    assert.isTrue(
      isEqual(
        largestSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
        [4, -1, 2, 1]
      )
    );
    assert.isTrue(
      isEqual(largestSumSubArray([2, 3, 4, 5, 6, 7]), [2, 3, 4, 5, 6, 7])
    );
  });
});
