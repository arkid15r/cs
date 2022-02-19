const fs = require("fs");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main(path) {
  let array = [];
  let length = 100000;

  for (let i = 0; i < length; i++) {
    array.push(getRandomInt(0, length));
  }

  array = JSON.stringify(array);

  fs.writeFile(path, array.slice(1, array.length - 1), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main("cs/data/random.txt");
