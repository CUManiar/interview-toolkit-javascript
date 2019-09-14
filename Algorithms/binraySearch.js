/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * Implementation of Binary Search
 *
 * Time Complexity : O(log n);
 */

function binarySearch(arr, ele) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== ele && start <= end) {
    if (ele < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === ele ? middle : -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 5);
