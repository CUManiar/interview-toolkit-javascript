function largestPrimeFactor(number) {
  let prime = 2, max = 1;
  while (prime <= number){
    if (number % prime == 0) {
      max = prime;
      number = number/prime;
    }
    else prime++; //Only increment the prime number if the number isn't divisible by it
  }
  console.log(max);
  return max;
}


largestPrimeFactor(9);

