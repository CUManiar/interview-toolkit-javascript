/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * Sum of first N natural numbers : n(n+1)/2
 * Sum of square of first N natural numbers : n(n+1)(2n+1)/6
 *
 */

// Returns Square of given number
let squaredNum = val => val * val;

function sumDifference(n) {
  let sum = (n * (n + 1)) / 2;
  let squaredSum = (n * (n + 1) * (2n + 1)) / 6;
  return squaredNum(sum) - squaredSum;
}

function sumSquareDifference(n) {
  let sum = 0;
  let squaredSum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
    squaredSum += squaredNum(i);
  }
  // Returns the difference between (1+2+...+n)^2 - (1^2+ 2^2 + ... + n^n)
  return squaredNum(sum) - squaredSum;
}
