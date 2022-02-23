import { swap } from '../../algorithms/sort/utils.js';

/* eslint-disable require-jsdoc */

export class Heap {
	#array;

	constructor(array) {
		this.#array = array;
	}

	#getLeftPos(pos) {
		return 2 * pos + 1;
	}

	#getParentPos(pos) {
		if (pos % 2) {
			return parseInt(pos / 2);
		}

		return parseInt(pos / 2) - 1;
	}

	#getRightPos(pos) {
		return 2 * pos + 2;
	}

	bubbleDown(pos) {
		const n = this.#array.length;

		const left = this.#getLeftPos(pos);
		const right = this.#getRightPos(pos);

		// No children.
		if (left > n) {
			return;
		}

		// Left child only.
		if (left < n && right >= n) {
			if (this.#array[pos] > this.#array[left]) {
				swap(this.#array, pos, left);
				this.bubbleDown(left);
			}
			// Both children.
		} else {
			let smaller;
			if (this.#array[left] < this.#array[right]) {
				smaller = left;
			} else {
				smaller = right;
			}
			if (this.#array[pos] > this.#array[smaller]) {
				swap(this.#array, pos, smaller);
				this.bubbleDown(smaller);
			}
		}
	}

	bubbleUp(pos) {
		if (pos == 0) {
			return;
		}
		const parent = this.#getParentPos(pos);

		if (this.#array[parent] > this.#array[pos]) {
			swap(this.#array, parent, pos);
			this.bubbleUp(parent);
		}
	}

	delete(pos) {
		if (pos < 0 || pos > this.#array.length - 1) {
			return;
		}

		const item = this.#array.pop();
		const length = this.#array.length;
		if (length && pos < length) {
			this.#array[pos] = item;
		}

		const parent = this.#getParentPos(pos);
		const left = this.#getLeftPos(pos);
		const right = this.#getRightPos(pos);

		if (
			(left < length && item > this.#array[left]) ||
			(right < length && item > this.#array[right])
		) {
			this.bubbleDown(pos);
		}

		if (parent > 0 && item < this.#array[parent]) {
			this.bubbleUp(pos);
		}
	}

	getArray() {
		return this.#array;
	}

	heapify(arr) {
		this.#array = arr;
		for (let i = parseInt(this.#array.length / 2); i >= 0; i--) {
			this.bubbleDown(i);
		}
	}

	insert(item) {
		this.#array.push(item);
		this.bubbleUp(this.#array.length - 1);
	}
}
