function sumOfMultipleOf_3_Or_5(tillNumber) {
    let sum = 0;
    for(let i = 1; i < tillNumber; i++) {
        sum += (i % 3 === 0 || i % 5 === 0)? i : 0;
    }
    return sum;
}

sumOfMultipleOf_3_Or_5(1000);