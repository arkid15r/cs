/** Symmetric difference tests. */

import { assert, should as _should } from 'chai';
import { isEqual } from 'lodash';
import { sym, symmetricDifference } from 'problems/symmetric-difference/main';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = _should();

describe('Symmetric Difference', () => {
  it('should return empty array for identical arrays', () => {
    symmetricDifference([], []).should.be.empty;
    symmetricDifference([0], [0]).should.be.empty;
    symmetricDifference([0, 1], [0, 1]).should.be.empty;
  });

  it('should return empty array for similar arrays', () => {
    symmetricDifference([1, 5], [5, 1]).should.be.empty;
    symmetricDifference([1, 5, 5], [5, 1, 5]).should.be.empty;
  });

  it('should return symmetric difference ', () => {
    assert.isTrue(isEqual(symmetricDifference([1, 5], [5, 1, 3]), [3]));
    assert.isTrue(
      isEqual(symmetricDifference([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6])
    );
    assert.isTrue(
      isEqual(symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5])
    );
    assert.isTrue(
      isEqual(symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5])
    );
  });
});

describe('Multi Array', () => {
  it('should return empty array for identical arrays', () => {
    assert.isTrue(
      isEqual(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5])
    );
  });
});
