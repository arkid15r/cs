/**
Given an array of integers, find the contiguous subarray of the given array
with the largest sum.

Example input/output:
Input: [-5, 10, 1, -10, 2, 5] output: [10, 1]
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] output: [4, -1, 2, 1]
Input: [-10, -2, -5, -19] output: [-2]
Input: [2, 3, 4, 5, 6, 7] output: [2, 3, 4, 5, 6, 7]
*/

/* eslint-disable require-jsdoc */

export function largestSumSubArray(array: Array<number>): Array<number> {
  let maxSum = Number.NEGATIVE_INFINITY;
  let start = 0;
  let end = 0;

  const size = array.length;
  for (let i = 0; i < size; i++) {
    let currentSum = 0;
    for (let j = i; j < size; j++) {
      currentSum += array[j];
      if (currentSum > maxSum) {
        start = i;
        end = j + 1;
        maxSum = currentSum;
      }
    }
  }

  return array.slice(start, end);
}
