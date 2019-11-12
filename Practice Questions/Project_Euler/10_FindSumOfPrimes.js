/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/** 
 *  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *   Find the sum of all the primes below two million.
 * 
 */

function isPrime(val) {
    if (val <= 1) {
      return true;
    } else if (val <= 3) {
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

function primeBelowGivenNumber(limit) {
    let primeList = [2];
    for(let i = 3; i <= limit; i++) {
        if(isPrime(i)) {
            primeList.push(i);
        }
    }
    const sumOfPrimes = primeList.reduce((acc, val) => acc + val, 0);
    return sumOfPrimes;
}