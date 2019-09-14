/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * Below program is to shift all the zeros to end of the array without changing the
 * sequence of the  existing elements
 */

var arr = [0, 1, 0, 3, 12];

var moveZeroes = function(num) {
  let shiftedArray = [];
  let count = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) {
      count++;
    } else {
      shiftedArray.push(num[i]);
    }
  }

  while (count > 0) {
    shiftedArray.push(0);
    count--;
  }

  return shiftedArray;
};

moveZeroes(arr);
