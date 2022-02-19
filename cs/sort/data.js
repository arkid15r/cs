import { readFileSync } from "fs";

let array = readFileSync("cs/data/random.txt").toString();

export const random = array.split(",").map((a) => parseInt(a));
export const sortedAsc = Array.from(random).sort((a, b) => a - b);
export const sortedDesc = Array.from(random).sort((a, b) => b - a);
