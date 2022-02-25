import { swap } from 'utils/data';

/* eslint-disable require-jsdoc */

export class Heap {
  private array: Array<number>;
  private size: number;

  public constructor(array: Array<number>) {
    this.array = array;
    this.size = array.length;
  }

  private getLeftPos(pos: number): number {
    return 2 * pos + 1;
  }

  private getParentPos(pos: number): number {
    if (pos % 2) {
      return Math.floor(pos / 2);
    }

    return Math.floor(pos / 2) - 1;
  }

  private getRightPos(pos: number): number {
    return 2 * pos + 2;
  }

  public bubbleDown(pos: number): void {
    const n = this.size;
    if (pos >= n) {
      return;
    }

    const left = this.getLeftPos(pos);
    const right = this.getRightPos(pos);

    // No children.
    if (left > n) {
      return;
    }

    // Left child only.
    if (left < n && right >= n) {
      if (this.array[pos] > this.array[left]) {
        swap(this.array, pos, left);
        this.bubbleDown(left);
      }
      // Both children.
    } else {
      let smaller;
      if (this.array[left] < this.array[right]) {
        smaller = left;
      } else {
        smaller = right;
      }
      if (this.array[pos] > this.array[smaller]) {
        swap(this.array, pos, smaller);
        this.bubbleDown(smaller);
      }
    }
  }

  public bubbleUp(pos: number): void {
    if (pos == 0) {
      return;
    }
    const parent = this.getParentPos(pos);

    if (this.array[parent] > this.array[pos]) {
      swap(this.array, parent, pos);
      this.bubbleUp(parent);
    }
  }

  public delete(pos: number): number {
    if (pos < 0 || pos > this.size - 1) {
      return;
    }
    const value = this.array[pos];
    const item = this.array[this.size - 1];
    this.size--;

    if (this.size && pos < this.size) {
      this.array[pos] = item;
    }

    const parent = this.getParentPos(pos);
    const left = this.getLeftPos(pos);
    const right = this.getRightPos(pos);

    if (
      (left < this.size && item > this.array[left]) ||
      (right < this.size && item > this.array[right])
    ) {
      this.bubbleDown(pos);
    }

    if (parent > 0 && item < this.array[parent]) {
      this.bubbleUp(pos);
    }

    return value;
  }

  public getArray(): Array<number> {
    return this.array.slice(0, this.size);
  }

  public getSize(): number {
    return this.size;
  }

  public insert(item: number): void {
    this.array.push(item);
    this.size++;
    this.bubbleUp(this.size - 1);
  }

  public push(item: number): void {
    this.array[this.array.length - this.size - 1] = item;
  }

  public toString(): String {
    return this.array.toString();
  }
}
