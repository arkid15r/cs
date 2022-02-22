import chai from "chai";

const should = chai.should();

export const runTests = (binarySearch) => {
  describe("Test", function () {
    before(() => {
      this.sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10];
    });

    describe("Binary Search", () => {
      it("should return true for border values", () => {
        binarySearch(this.sortedArray, 0).should.be.true;
        binarySearch(this.sortedArray, 10).should.be.true;
      });
      it("should return true when the value is present", () => {
        binarySearch(this.sortedArray, 5).should.be.true;
      });

      it("should return false when the value is not present", () => {
        binarySearch(this.sortedArray, 11).should.be.false;
      });
    });
  });
};
