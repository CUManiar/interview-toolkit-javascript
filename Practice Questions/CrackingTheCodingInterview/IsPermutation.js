/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/*
 * Problem Statement:
 * 		Given two strings. write a method to decide if one is a permutation
 * 		of the other.
 */

function permutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  sortedStr1 = str1
    .split("")
    .sort()
    .join("");
  sortedStr2 = str2
    .split("")
    .sort()
    .join("");
  return sortedStr1 === sortedStr2;
}

console.log(permutation("Chirag", "Chirag"));
