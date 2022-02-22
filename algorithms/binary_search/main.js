import { binarySearch as binarySearchIterative } from "./iterative.js";

const array = [0, 1, 2, 3, 4, 5, 6, 7];

const found = binarySearchIterative(array, 5);

console.log(found ? "Found" : "Not found");
