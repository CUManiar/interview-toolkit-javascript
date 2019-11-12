/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * Problem statement:
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 *   a2 + b2 = c2
 *   For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 *   There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 *   Find the product [a*b*c] = 31875000
 */


function findPythagorasTriplets() {

    let sum = 1000;
    for(let a = 1; a <= sum/3; a++) {
        for(let b = a + 1; b <= sum/2; b++) {
            let c = sum - a - b;
            if(a*a + b*b === c*c) {
                return [a, b, c];
            }
        }
    }
}

productOfTriplets = (a, b, c) => {
    return a*b*c;
}

