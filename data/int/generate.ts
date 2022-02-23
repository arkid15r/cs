fs = require("fs");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main(ordering, size) {
  let array = [];
  let length = size * 1000;
  let i;

  if (ordering == "asc") {
    for (i = 0; i < length; i++) {
      array.push(i + 1);
    }
  } else if (ordering == "desc") {
    for (i = length; i > 0; i--) {
      array.push(i);
    }
  } else if (ordering == "random") {
    for (let i = 0; i < length; i++) {
      array.push(getRandomInt(0, length));
    }
  }

  array = JSON.stringify(array).replace(/,/g, " ");

  fs.writeFile(
    `cs/data/int/${ordering}_${size}K.txt`,
    array.slice(1, array.length - 1),
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
}

main("asc", 100);
main("desc", 100);
main("random", 100);
