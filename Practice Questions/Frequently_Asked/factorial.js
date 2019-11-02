/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 *
 * @param {number} num number for factorial
 *
 * Finding factorial of given number using recursion
 *  i.e. 5! = 120
 */

function fact(num) {
  return num === 1 || num === 0 ? 1 : num * fact(num - 1);
}

fact(5);
