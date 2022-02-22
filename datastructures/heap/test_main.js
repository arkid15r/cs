import chai from "chai";

import { Heap } from "./main.js";

const should = chai.should();

describe("Heap", function () {
  describe("bubbleUp", () => {
    it("bubbleUp() should not change correct heap", () => {
      let expectedHeap = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
      let heap = new Heap(expectedHeap);
      heap.bubbleUp(expectedHeap.length - 1);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());

      heap.bubbleUp(expectedHeap.length - 2);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());

      heap.bubbleUp(0);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());

      heap.bubbleUp(1);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());

      heap.bubbleUp(parseInt(expectedHeap.length / 2));
      heap.getArray().toString().should.be.equal(expectedHeap.toString());
    });

    it("bubbleUp() should fix depth 2 heap", () => {
      let brokenHeap = [1, 5, 7, 3, 8];
      let expectedHeap = [1, 3, 7, 5, 8];
      let heap = new Heap(brokenHeap);
      heap.bubbleUp(3);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());
    });

    it("bubbleUp() should fix depth 3 heap with two leaves", () => {
      let brokenHeap = [1, 10, 15, 12, 17, 25, 35, 13, 14, 18, 19, 11, 26];
      let expectedHeap = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25, 26];
      let heap = new Heap(brokenHeap);
      heap.bubbleUp(11);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());
    });

    it("bubbleUp() should fix depth 3 heap with one leaf", () => {
      let brokenHeap = [1, 10, 15, 12, 17, 25, 35, 13, 14, 18, 19, 11];
      let expectedHeap = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
      let heap = new Heap(brokenHeap);
      heap.bubbleUp(11);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());
    });
  });

  describe("bubbleDown", () => {
    it("bubbleDown() should not change correct heap", () => {
      let expectedHeap = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
      let heap = new Heap(expectedHeap);
      heap.bubbleDown(expectedHeap.length - 1);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());

      heap.bubbleDown(expectedHeap.length - 2);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());

      heap.bubbleDown(0);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());

      heap.bubbleDown(1);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());

      heap.bubbleDown(parseInt(expectedHeap.length / 2));
      heap.getArray().toString().should.be.equal(expectedHeap.toString());
    });

    it("bubbleDown() should fix depth 2 heap", () => {
      let brokenHeap = [10, 1, 15, 4, 5, 16, 17];
      let expectedHeap = [1, 4, 15, 10, 5, 16, 17];
      let heap = new Heap(brokenHeap);
      heap.bubbleDown(0);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());
    });

    it("bubbleDown() should fix depth 3 heap with two leaves", () => {
      let brokenHeap = [10, 1, 2, 3, 4, 5, 6, 7, 8];
      let expectedHeap = [1, 3, 2, 7, 4, 5, 6, 10, 8];
      let heap = new Heap(brokenHeap);
      heap.bubbleDown(0);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());
    });

    it("bubbleDown() should fix depth 3 heap with one leaf", () => {
      let brokenHeap = [10, 1, 2, 3, 4, 5, 6, 7];
      let expectedHeap = [1, 3, 2, 7, 4, 5, 6, 10];
      let heap = new Heap(brokenHeap);
      heap.bubbleDown(0);
      heap.getArray().toString().should.be.equal(expectedHeap.toString());
    });
  });
});
