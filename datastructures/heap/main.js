import { swap } from "../../algorithms/sort/utils.js";

/* eslint-disable require-jsdoc */

export class Heap {
  #array;

  constructor(array) {
    this.#array = array;
  }

  bubbleDown(pos) {
    const n = this.#array.length;

    const left = 2 * pos + 1;
    const right = 2 * pos + 2;

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

    const parent = parseInt(pos / 2);
    if (this.#array[parent] > this.#array[pos]) {
      swap(this.#array, parent, pos);
      this.bubbleUp(parent);
    }
  }

  getArray() {
    return this.#array;
  }
}
