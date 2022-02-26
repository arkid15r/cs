import { heapSort as maxHeapSort } from 'algorithms/sort/heap-sort/max_heap';
import { heapSort as minHeapSort } from 'algorithms/sort/heap-sort/min_heap';

const array1 = [43, 55, 26, 17, 28, 2, 44, 4, 3, 55];
console.log(array1);
minHeapSort(array1);
console.log(array1);

const array2 = [43, 55, 26, 17, 28, 2, 44, 4, 3, 55];
console.log(array2);
maxHeapSort(array2);
console.log(array2);
