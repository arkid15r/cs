import { performance } from "perf_hooks";
import { random, sortedAsc, sortedDesc } from "./data.js";

export function swap(arr, id1, id2) {
  let tmp = arr[id1];
  arr[id1] = arr[id2];
  arr[id2] = tmp;
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
  let array, original, stats;

  array = Array.from(random);
  original = Array.from(random);
  stats = new Stats("Average case (random): ");
  sorter(array, stats);
  verify(array, original);
  stats.print();

  stats = new Stats("Best case (sorted asc):");
  array = Array.from(sortedAsc);
  original = Array.from(sortedAsc);
  sorter(array, stats);
  verify(array, original);
  stats.print();

  stats = new Stats("Worst case (sorted desc):");
  array = Array.from(sortedDesc);
  original = Array.from(sortedDesc);
  sorter(array, stats);
  verify(array, original);
  stats.print();

  console.log("Done.");
}

export class Stats {
  counters = {};
  description;
  endTime;
  startTime;

  constructor(description) {
    this.counters["iteration"] = 0;
    this.counters["access"] = 0;
    this.description = description;
    this.start = performance.now();
  }

  addAccess(num) {
    this.counters["access"] += num;
  }

  addIterations(num) {
    this.counters["iteration"] += num;
  }

  getTime() {
    return this.endTime - this.startTime;
  }

  incIterations() {
    this.counters["iteration"]++;
  }

  incAccess() {
    this.counters["access"]++;
  }

  print() {
    if (!this.getTime()) {
      console.log("No stats available.");
      return;
    }

    console.log(this.description);
    console.log(`Access: ${this.counters["access"].toLocaleString("en-US")}`);
    console.log(
      `Iterations: ${this.counters["iteration"].toLocaleString("en-US")}`
    );
    console.log(`Time: ${parseInt(this.getTime() / 1000)}s.`);
    console.log("\n");
  }

  setStartTime() {
    this.startTime = performance.now();
  }

  setEndTime() {
    this.endTime = performance.now();
  }
}
