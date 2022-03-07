/* 
Given an array, find element pairs whose sum equal the second argument 
n and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different 
indices. Each pair should use the lowest possible available indices. 
Once an element has been used it cannot be reused to pair with another element. 
For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 
0 rather than the 1 at index 1, because 0+2 < 1+2.
*/

/* eslint-disable require-jsdoc */

export function pairwise(array: Array<number>, n: number): number {
  let res = 0;
  const visited = new Set();

  for (let i = 0; i < array.length; i++) {
    if (visited.has(i)) {
      continue;
    }
    for (let j = i + 1; j < array.length; j++) {
      if (visited.has(j) || visited.has(i)) {
        continue;
      }
      if (array[i] + array[j] == n) {
        res += i + j;
        visited.add(i);
        visited.add(j);
      }
    }
  }
  return res;
}
