/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/*
 * Problem Statement:
 * 		Implement an algorithm to determine if a string has all unique characters,
 * 		What if you cannot use additional data structures?
 */

function IsUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt(j) === str.charAt(i)) {
        return false;
      }
    }
  }
  return true;
}

console.log(IsUnique("Chirag"));
