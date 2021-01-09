/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 *
 * @param {arr} arr unsorted array
 *
 * Time Complexity: O(n^2)
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  console.log(arr);
  return arr;
}

selectionSort([3, 4, 5, 1, 3]);
