/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * 7. Project Euler : Find the nth prime number
 *  i.e. nthPrime(6) => [13]
 *       nth Prime(5) => [11]
 */

// Will check if number is prime or not
function isPrime(val) {
 if (val < 4) {
    return true;
  } else if (val % 2 === 0 || val % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= val) {
    if (val % i === 0 || val % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function nthPrimeNumber(num) {
  // Will hold all the prime numbers till the given number
  let primeList = [2];

  for (let i = 3; primeList.length < num; i = i + 2) {
    if (isPrime(i)) {
      primeList.push(i);
    }
  }

  return primeList[primeList.length - 1];
}

var t1 = performance.now();
nthPrimeNumber(10001);
var t2 = performance.now();
console.log("Time taken : -->", (t2 - t1) / 1000);

// 2 3 5 7 11 13 . . .
