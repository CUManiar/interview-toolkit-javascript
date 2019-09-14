/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 *
 * @param {Array} arr
 *
 *  Finding the product of all elements in given array
 *
 *  i.e.
 *      i/p : [1,2,3,4,5]
 *      o/p : 120
 */
function productOfArray(arr) {
  if (arr.length <= 0) {
    return 1;
  } else {
    return arr[0] * productOfArray(arr.splice(1));
  }
}

productOfArray([1, 2, 3, 4, 5]);
