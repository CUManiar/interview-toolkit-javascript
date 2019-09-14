/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 *
 * @param {Array} num
 * @param {Number} k
 *
 * Rotate the array as per `k`
 *
 */
function rotate(num, k) {
  let shifted = num;
  for (let i = num.length - k; i < num.length; i++) {
    shifted.push(num[i]);
  }
  for (let j = 0; j < num.length - k; j++) {
    shifted.push(num[j]);
  }
  return shifted;
}

rotate([1, 2, 3, 4, 5, 6], 3);
