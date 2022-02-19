import { performance } from "perf_hooks";

export function swap(arr, id1, id2) {
  let tmp = arr[id1];
  arr[id1] = arr[id2];
  arr[id2] = tmp;
}

export function verify(sorted, original) {
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

  // console.log("Result: ", sorted);
}

export class Stats {
  counters = {};
  start;

  constructor() {
    this.counters["iteration"] = 0;
    this.counters["access"] = 0;
    this.start = performance.now();
  }

  addAccess(num) {
    this.counters["access"] += num;
  }

  addIterations(num) {
    this.counters["iteration"] += num;
  }

  incIterations() {
    this.counters["iteration"]++;
  }

  incAccess() {
    this.counters["access"]++;
  }

  print() {
    console.log(`Access: ${this.counters["access"]}`);
    console.log(`Iteration: ${this.counters["iteration"]}`);
    console.log(`Time: ${performance.now() - this.start} ms.`);
    console.log("\n");
  }
}
