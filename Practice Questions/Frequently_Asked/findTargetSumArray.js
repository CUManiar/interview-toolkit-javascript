/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * @param {Problem Statement}
 * Given an array of integers, return indices of the two numbers such that they add up to a         specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:

    Given num = [2, 7, 11, 15], target = 9,

    Because num[0] + num[1] = 2 + 7 = 9,
    return [0, 1].
 */

// Solution #1 :
/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
var twoSum = function(num, target) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return [i, j];
        break;
      }
    }
  }
  return [];
};

twoSum([1, 2, 3, 4, 5], 9);
