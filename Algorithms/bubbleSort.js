/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 *
 * @param {*} arr unsorted array
 * Time Complexity : O(n^2)
 */
function bubbleSort(arr) {
  var temp, noSwap;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        count++;
        noSwap = false;
      }
      if (noSwap) {
        break;
      }
    }
  }
  return arr;
}

bubbleSort([110, 23, 3, 122, 434, 6, 2]);
