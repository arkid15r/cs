import { sym, symmetricDifference } from 'exercises/symmetric-difference/main';
import { should as _should } from 'chai';

const should = _should(); // eslint-disable-line no-unused-vars

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
    symmetricDifference([1, 5], [5, 1, 3])
      .toString()
      .should.be.equal([3].toString());
    symmetricDifference([1, 2, 3], [4, 5, 6])
      .toString()
      .should.be.equal([1, 2, 3, 4, 5, 6].toString());
    symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4])
      .toString()
      .should.be.equal([3, 4, 5].toString());
    symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5])
      .toString()
      .should.be.equal([3, 4, 5].toString());
  });
});

describe('Sym', () => {
  it('should return empty array for identical arrays', () => {
    sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
      .toString()
      .should.be.equal([1, 4, 5].toString());
  });
});
