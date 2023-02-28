'use strict';

let result = 0;

function calc(number, operator) {
  switch (operator) {
    case '+':
      result += number;
      break;
    case '-':
      result -= number;
      break;
    case '*':
      result *= number;
      break;
    case '/':
      result /= number;
      break;
  }
  console.log(result);
}

calc(5, '+');
calc(2, '*');
calc(3, '-');
calc(2, '*');
calc(7, '/');
