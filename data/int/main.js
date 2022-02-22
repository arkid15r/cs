import { readFileSync } from "fs";

export const random100K = Array.from(
  readFileSync("data/int/random_100K.txt")
    .toString()
    .split(" ")
    .map((a) => parseInt(a))
);

export const sortedAsc100K = Array.from(
  readFileSync("data/int/asc_100K.txt")
    .toString()
    .split(" ")
    .map((a) => parseInt(a))
);

export const sortedDesc100K = Array.from(
  readFileSync("data/int/desc_100K.txt")
    .toString()
    .split(" ")
    .map((a) => parseInt(a))
);
