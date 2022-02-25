/* eslint-disable require-jsdoc */

export function symmetricDifference(
  array1: Array<number>,
  array2: Array<number>
): Array<number> {
  array1.sort((a: number, b: number) => a - b);
  array2.sort((a: number, b: number) => a - b);

  const diff = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (i > 0 && array1[i] == array1[i - 1]) {
      i++;
      continue;
    }
    if (j > 0 && array2[j] == array2[j - 1]) {
      j++;
      continue;
    }

    if (array1[i] < array2[j]) {
      diff.push(array1[i]);
      i++;
    } else if (array1[i] > array2[j]) {
      diff.push(array2[j]);
      j++;
    } else {
      i++;
      j++;
    }
  }

  while (i < array1.length) {
    if (i > 0 && array1[i] == array1[i - 1]) {
      i++;
      continue;
    }
    diff.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    if (j > 0 && array2[j] == array2[j - 1]) {
      j++;
      continue;
    }
    diff.push(array2[j]);
    j++;
  }

  return diff;
}

export function sym(...args: Array<Array<number>>): Array<number> {
  const arrays = args;

  let a1 = arrays[0];
  for (let i = 1; i < arrays.length; i++) {
    a1 = symmetricDifference(a1, arrays[i]);
  }

  return a1;
}
