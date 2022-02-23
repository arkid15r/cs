export function swap(array: Array<number>, id1: number, id2: number) {
  const tmp = array[id1];
  array[id1] = array[id2];
  array[id2] = tmp;
}
