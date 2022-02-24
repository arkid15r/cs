/** Data utils. */

/**
 * Swap two elements in array.
 * @param {Array} array The elements array.
 * @param {int} id1 The first element's position.
 * @param {int} id2 The second element's position.
 */
export function swap(array: Array<number>, id1: number, id2: number) {
  const tmp = array[id1];
  array[id1] = array[id2];
  array[id2] = tmp;
}
