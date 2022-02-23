import chai from 'chai';

import { Heap } from './main.js';

const should = chai.should(); // eslint-disable-line no-unused-vars

describe('Heap', function () {
	describe('bubbleDown', () => {
		it('should not change correct heap', () => {
			const expectedHeap = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
			const heap = new Heap(expectedHeap);
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

		it('should fix depth 2 heap', () => {
			const brokenHeap = [10, 1, 15, 4, 5, 16, 17];
			const expectedHeap = [1, 4, 15, 10, 5, 16, 17];
			const heap = new Heap(brokenHeap);
			heap.bubbleDown(0);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should fix depth 3 heap with two leaves', () => {
			const brokenHeap = [10, 1, 2, 3, 4, 5, 6, 7, 8];
			const expectedHeap = [1, 3, 2, 7, 4, 5, 6, 10, 8];
			const heap = new Heap(brokenHeap);
			heap.bubbleDown(0);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should fix depth 3 heap with one leaf', () => {
			const brokenHeap = [10, 1, 2, 3, 4, 5, 6, 7];
			const expectedHeap = [1, 3, 2, 7, 4, 5, 6, 10];
			const heap = new Heap(brokenHeap);
			heap.bubbleDown(0);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});
	});

	describe('bubbleUp', () => {
		it('should not change correct heap', () => {
			const expectedHeap = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
			const heap = new Heap(expectedHeap);
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

		it('should fix depth 2 heap', () => {
			const brokenHeap = [1, 5, 7, 3, 8];
			const expectedHeap = [1, 3, 7, 5, 8];
			const heap = new Heap(brokenHeap);
			heap.bubbleUp(3);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should fix depth 3 heap with two leaves', () => {
			const brokenHeap = [1, 10, 15, 12, 17, 25, 35, 13, 14, 18, 19, 11, 26];
			const expectedHeap = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25, 26];
			const heap = new Heap(brokenHeap);
			heap.bubbleUp(11);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should fix depth 3 heap with one leaf', () => {
			let brokenHeap = [1, 10, 15, 12, 17, 25, 35, 13, 14, 18, 19, 11];
			let expectedHeap = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
			let heap = new Heap(brokenHeap);
			heap.bubbleUp(11);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());

			brokenHeap = [1, 6, 4, 7, 14, 15, 3];
			expectedHeap = [1, 6, 3, 7, 14, 15, 4];
			heap = new Heap(brokenHeap);
			heap.bubbleUp(6);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});
	});

	describe('delete', () => {
		it('should correctly remove last node of a heap', () => {
			const originalHeap = [1];
			const expectedHeap = [];
			const heap = new Heap(originalHeap);
			heap.delete(0);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should correctly remove a node from a heap', () => {
			let originalHeap = [1, 3, 2, 7, 4, 5, 6];
			let expectedHeap = [1, 3, 5, 7, 4, 6];
			let heap = new Heap(originalHeap);
			heap.delete(2);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());

			originalHeap = [1, 3, 2, 7, 4, 5, 6];
			expectedHeap = [1, 4, 2, 7, 6, 5];
			heap = new Heap(originalHeap);
			heap.delete(1);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should correctly remove a root from a heap', () => {
			const originalHeap = [1, 3, 2, 7, 4, 5, 6];
			const expectedHeap = [2, 3, 5, 7, 4, 6];
			const heap = new Heap(originalHeap);
			heap.delete(0);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should correctly remove a leaf from a heap', () => {
			let originalHeap = [1, 3, 2, 7, 4, 5, 6, 7];
			let expectedHeap = [1, 3, 2, 7, 4, 5, 6];
			let heap = new Heap(originalHeap);
			heap.delete(7);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());

			originalHeap = [1, 3, 2, 7, 4, 5, 6];
			expectedHeap = [1, 3, 2, 7, 6, 5];
			heap = new Heap(originalHeap);
			heap.delete(4);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());

			originalHeap = [1, 3, 2, 7, 4, 5, 6];
			expectedHeap = [1, 3, 2, 7, 4, 6];
			heap = new Heap(originalHeap);
			heap.delete(5);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());

			originalHeap = [1, 100, 2, 103, 110, 2, 3];
			expectedHeap = [1, 3, 2, 100, 110, 2];
			heap = new Heap(originalHeap);
			heap.delete(3);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});
	});

	describe('heapify', () => {
		it('should return empty array', () => {
			const expectedHeap = [];
			const heap = new Heap(expectedHeap);
			heap.heapify(expectedHeap);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should not change array with 1 element', () => {
			const expectedHeap = [1];
			const heap = new Heap(expectedHeap);
			heap.heapify(expectedHeap);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should not change correct heap', () => {
			const expectedHeap = [1, 10, 11, 12, 17, 15, 35, 13, 14, 18, 19, 25];
			const heap = new Heap(expectedHeap);
			heap.heapify(expectedHeap);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should create depth 2 heap', () => {
			const array = [15, 20, 12, 92, 17, 5, 35];
			const expectedHeap = [5, 17, 12, 92, 20, 15, 35];
			const heap = new Heap(expectedHeap);
			heap.heapify(array);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should create depth 3 heap', () => {
			const array = [7, 20, 12, 92, 20, 5, 15, 2, 54, 1, 7, 0];
			const expectedHeap = [0, 1, 5, 2, 7, 7, 15, 92, 54, 20, 20, 12];
			const heap = new Heap(expectedHeap);
			heap.heapify(array);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});
	});

	describe('insert', () => {
		it('should take a right place in an empty heap', () => {
			const originalHeap = [];
			const expectedHeap = [1];
			const heap = new Heap(originalHeap);
			heap.insert(1);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should take the root place in a heap', () => {
			let originalHeap = [1, 3, 2, 7, 4, 5, 6];
			let expectedHeap = [1, 1, 2, 3, 4, 5, 6, 7];
			let heap = new Heap(originalHeap);
			heap.insert(1);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());

			originalHeap = [1, 3, 2, 7, 4, 5, 6];
			expectedHeap = [-5, 1, 2, 3, 4, 5, 6, 7];
			heap = new Heap(originalHeap);
			heap.insert(-5);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should take a leaf place in a heap', () => {
			const originalHeap = [1, 3, 2, 7, 4, 5, 6];
			const expectedHeap = [1, 3, 2, 7, 4, 5, 6, 10];
			const heap = new Heap(originalHeap);
			heap.insert(10);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});

		it('should take a node place in a heap', () => {
			let originalHeap = [1, 6, 4, 7, 14, 15, 16];
			let expectedHeap = [1, 3, 4, 6, 14, 15, 16, 7];
			let heap = new Heap(originalHeap);
			heap.insert(3);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());

			originalHeap = [1, 6, 4, 7, 14, 15];
			expectedHeap = [1, 6, 3, 7, 14, 15, 4];
			heap = new Heap(originalHeap);
			heap.insert(3);
			heap.getArray().toString().should.be.equal(expectedHeap.toString());
		});
	});
});
