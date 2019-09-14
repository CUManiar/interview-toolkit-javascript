/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 *
 * @param {String} str Given string
 * @param {String} keyword word need to find count of
 *
 *  Below method will match the given `keyword` from the `string` and
 *  get it count!
 */
function wordCount(str, keyword) {
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < keyword.length; j++) {
      if (keyword[j] !== str[i + j]) break;
      if (j === keyword.length - 1) count++;
    }
  }
  return count;
}

wordCount("wowomgzomg", "omg");
