/*
 * @author Chiragkumar Maniyar
 * @2020 all rights are reserved
 */



/**
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * Do not allocate extra space for another array, you must do this by modifying the input array 
 * in-place with O(1) extra memory.
 * 
 * Example 1:
 *  Input: ["h","e","l","l","o"]
 *  Output: ["o","l","l","e","h"]
 * Example 2:
 *  Input: ["H","a","n","n","a","h"]
 *  Output: ["h","a","n","n","a","H"]
 */

function helper(arr, left, right) {
    if (left >= right) return;
    let temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
    helper(arr, left, right);
}


function reverseArr(arr) {
    console.log('before', arr);
    helper(arr, 0, arr.length - 1);
    console.log('after', arr);
}

reverseArr(['c', 'h', 'i', 'r', 'a', 'g']);