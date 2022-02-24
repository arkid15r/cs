import { should as _should } from 'chai';

const should = _should(); // eslint-disable-line no-unused-vars

export const runTests = (binarySearch: Function) => {
  const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10];

  describe('Binary Search', () => {
    it('should return true for border values', () => {
      binarySearch(sortedArray, 0).should.be.true;
      binarySearch(sortedArray, 10).should.be.true;
    });

    it('should return true when the value is present', () => {
      binarySearch(sortedArray, 5).should.be.true;
    });

    it('should return false when the value is not present', () => {
      binarySearch(sortedArray, 11).should.be.false;
    });
  });
};
