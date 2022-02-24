/* eslint-disable require-jsdoc */

import * as fs from 'fs';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main(ordering, size) {
  const array = [];
  const length = size * 1000;

  if (ordering == 'asc') {
    for (let i = 0; i < length; i++) {
      array.push(i + 1);
    }
  } else if (ordering == 'desc') {
    for (let i = length; i > 0; i--) {
      array.push(i);
    }
  } else if (ordering == 'random') {
    for (let i = 0; i < length; i++) {
      array.push(getRandomInt(0, length));
    }
  }

  fs.writeFile(
    `cs/data/int/${ordering}${size}K.txt`,
    JSON.stringify(array)
      .replace(/,/g, ' ')
      .slice(1, array.length - 1),
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
}

main('asc', 100);
main('desc', 100);
main('random', 100);
