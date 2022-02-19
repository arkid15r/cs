import { insertionSort } from "./default.js";
import { sortedAsc, sortedDesc, random } from "../data.js";
import { Stats } from "../utils.js";
import { verify } from "../utils.js";

let arr, original, stats;

console.log("Random:");
arr = Array.from(random);
original = Array.from(random);
stats = new Stats();

insertionSort(arr, stats);
verify(arr, original);
stats.print();

// Best case.
console.log("Sorted asc:");
arr = Array.from(sortedAsc);
original = Array.from(sortedAsc);
stats = new Stats();

insertionSort(arr, stats);
verify(arr, original);
stats.print();

// Worst case.
console.log("Sorted desc:");
arr = Array.from(sortedDesc);
original = Array.from(sortedDesc);
stats = new Stats();

insertionSort(arr, stats);
verify(arr, original);
stats.print();
