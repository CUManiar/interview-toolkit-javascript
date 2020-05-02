/*
 * @author Chiragkumar Maniyar
 * @2019-2020 all rights are reserved
 */

/**
 * Problem Statement: 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * 
 * What is the sum of the digits of the number 21000?
 */

const getSumOfDigitsOfNumber = exponent => {
    const numberString = BigInt(2 ** exponent).toString();
    console.log(numberString)
    let sum = 0;
    for (let digit of numberString) {
        sum += parseInt(digit);
    }
    console.log(sum);
}

getSumOfDigitsOfNumber(1000);