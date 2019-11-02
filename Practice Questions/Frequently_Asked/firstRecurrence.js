/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * @param {Problem Statement}
 * Given in array find the first recurrence
 * i.e. if arr = [1,2,3,4,2,4]  ==> 2
 *         arr = [2,3,4,1,3] ==> 3
 *         arr = [1,2,3,4] ==> undefined
 */

// Solution #1 :
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function firstRecurrence(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
    if (obj[arr[i]] > 1) {
      return arr[i];
    }
  }
  return undefined;
}

firstRecurrence([1, 2, 3, 4, 2, 3]);
