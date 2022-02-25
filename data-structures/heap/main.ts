import { swap } from 'utils/data';

/* eslint-disable require-jsdoc */

export class Heap {
	#array;
	#size;

	constructor(array) {
		this.#array = array;
		this.#size = array.length;
	}

	#getLeftPos(pos) {
		return 2 * pos + 1;
	}

	#getParentPos(pos) {
		if (pos % 2) {
			return Math.floor(pos / 2);
		}

		return Math.floor(pos / 2) - 1;
	}

	#getRightPos(pos) {
		return 2 * pos + 2;
	}

	bubbleDown(pos) {
		const n = this.#size;
		if (pos >= n) {
			return;
		}

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
		if (pos < 0 || pos > this.#size - 1) {
			return;
		}
		const value = this.#array[pos];
		const item = this.#array[this.#size - 1];
		this.#size--;

		if (this.#size && pos < this.#size) {
			this.#array[pos] = item;
		}

		const parent = this.#getParentPos(pos);
		const left = this.#getLeftPos(pos);
		const right = this.#getRightPos(pos);

		if (
			(left < this.#size && item > this.#array[left]) ||
			(right < this.#size && item > this.#array[right])
		) {
			this.bubbleDown(pos);
		}

		if (parent > 0 && item < this.#array[parent]) {
			this.bubbleUp(pos);
		}

		return value;
	}

	getArray() {
		return this.#array.slice(0, this.#size);
	}

	getSize() {
		return this.#size;
	}

	insert(item) {
		this.#array.push(item);
		this.#size++;
		this.bubbleUp(this.#size - 1);
	}

	push(item) {
		this.#array[this.#array.length - this.#size - 1] = item;
	}

	toString() {
		return this.#array.toString();
	}
}
