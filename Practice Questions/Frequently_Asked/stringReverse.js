/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

// Reverse the String
/*
 * i.e.
 *  input = "Hey, I'm Chirag!";
 *  output = "!garihC m'I ,yeH";
 */

// Simple Implementation
// Time Complexity : O(n);
// Space Complexity : O(1);
function reverse(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i > -1; i--) {
    reversedStr += str[i];
  }
  console.log(reversedStr);
  return reversedStr;
}

reverse("Hey, I'm Chirag!");
