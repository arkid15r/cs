import { heapSort } from 'algorithms/sort/heap-sort/min_heap';
import { runHeapSortTests } from 'algorithms/sort/heap-sort/test/common';

describe('Min Heap Sort', function () {
  runHeapSortTests(heapSort);
});
