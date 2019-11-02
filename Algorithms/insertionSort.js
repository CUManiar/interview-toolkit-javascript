/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 *
 * @param {arr} arr unsorted array
 *
 *  Time Complexity : O(n^2)
 */

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

insertionSort([2, 4, 1, 3, 9, 12, 0]);
