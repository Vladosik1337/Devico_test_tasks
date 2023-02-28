'use strict';

function bar(number) {
  const array = [];

  for (let i = 0; i < number; i++) {
    array[i] = [];

    for (let j = 0; j < number; j++) {
      if (i === j || i === number - j - 1) {
        array[i][j] = 2;
      } else if (i === 0 || i === number - 1) {
        array[i][j] = 1;
      } else {
        array[i][j] = 0;
      }
    }
  }

  return array;
}

console.log(bar(5));
console.log(bar(4));
