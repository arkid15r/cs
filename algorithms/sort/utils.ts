import { performance } from 'universal-perf-hooks';
import { random100K, sortedAsc100K, sortedDesc100K } from 'data/int/main';

export function swap(array: Array<number>, id1: number, id2: number) {
  const tmp = array[id1];
  array[id1] = array[id2];
  array[id2] = tmp;
}

function verify(sorted, original) {
  if (original.length != sorted.length) {
    console.log(
      "Sorted array's length isn't equal to unsorted array's length."
    );
    return;
  }

  original.sort((a, b) => a - b);
  if (original.toString() != sorted.toString()) {
    console.log(`Array wasn't sorted properly: ${sorted}`);
    return;
  }
}

export function run(sorter) {
  let array;
  let original;
  let stats;

  array = Array.from(random100K);
  original = Array.from(random100K);
  stats = new Stats('Average case (random): ');
  sorter(array, stats);
  verify(array, original);
  stats.print();

  stats = new Stats('Best case (sorted asc):');
  array = Array.from(sortedAsc100K);
  original = Array.from(sortedAsc100K);
  sorter(array, stats);
  verify(array, original);
  stats.print();

  stats = new Stats('Worst case (sorted desc):');
  array = Array.from(sortedDesc100K);
  original = Array.from(sortedDesc100K);
  sorter(array, stats);
  verify(array, original);
  stats.print();

  console.log('Done.');
}

export class Stats {
  counters = {};
  description;
  endTime;
  startTime;

  constructor(description) {
    this.counters['iteration'] = 0;
    this.counters['access'] = 0;
    this.description = description;
    this.startTime = performance.now();
  }

  addAccess(num) {
    this.counters['access'] += num;
  }

  addIterations(num) {
    this.counters['iteration'] += num;
  }

  getTime() {
    return this.endTime - this.startTime;
  }

  incIterations() {
    this.counters['iteration']++;
  }

  incAccess() {
    this.counters['access']++;
  }

  print() {
    if (!this.getTime()) {
      console.log('No stats available.');
      return;
    }

    console.log(this.description);
    console.log(`Access: ${this.counters['access'].toLocaleString('en-US')}`);
    console.log(
      `Iterations: ${this.counters['iteration'].toLocaleString('en-US')}`
    );
    console.log(`Time: ${Math.floor(this.getTime() / 1000)}s.`);
    console.log('\n');
  }

  setStartTime() {
    this.startTime = performance.now();
  }

  setEndTime() {
    this.endTime = performance.now();
  }
}
