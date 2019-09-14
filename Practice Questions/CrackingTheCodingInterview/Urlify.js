/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/*
 * Problem Statement:
 * 		Write a method to replace all spaces in a string with '%20'. You may
 * 		assume that the string has sufficient space at the end to hold the
 * 		additional characters, and that you are given the "true" length of
 *  	the string.
 *
 *  	EXAMPLE:
 *  	Input: "Mr John Smith    "
 *  	Output: "Mr%20John%20Smith"
 */

function Urlify(str) {
  let newstr = "";
  str.trim();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newstr += "%20";
    } else {
      newstr += str[i];
    }
  }
  return newstr;
}

let val = foo("Chirag Maniar              ");
console.log(val);
