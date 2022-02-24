/* eslint-disable require-jsdoc */

import { random100K, sortedAsc100K, sortedDesc100K } from 'data/int/main';
import { Stats } from 'utils/stats';

function verify(sorted, original) {
  if (original.length != sorted.length) {
    console.log(
      "Sorted array's length isn't equal to unsorted array's length."
    );
    return;
  }

  original.sort((a: number, b: number) => a - b);
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
