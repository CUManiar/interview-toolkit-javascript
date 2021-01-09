/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * The following iterative sequence is defined for the set of positive integers:
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 * Using the rule above and starting with 13, we generate the following sequence:
 * 
 *          13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * 
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 * Which starting number, under one million, produces the longest chain?
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

/**
 * Output: Largest Number = 837799; Largest Sequence = 525;
 */

function collatz(num) {
    let count = 1;
    while (num != 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = (3 * num) + 1;
        }
        count++;
    }
    return count;
}

function longestCollatzSequence(endNum) {
    var startTime = new Date().getTime();
    var chainSize = [0, 0];
    for (let i = 1; i <= endNum; i++) {
        var newSize = collatz(i);
        if (newSize >= chainSize[0]) {
            chainSize[0] = newSize;
            chainSize[1] = i;
        }
    }
    var endTime = new Date().getTime();
    console.log((endTime - startTime) / 1000);
    console.log(chainSize);
    return chainSize;
}

longestCollatzSequence(1000000);
