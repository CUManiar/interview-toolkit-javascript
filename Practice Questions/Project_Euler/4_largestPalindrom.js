function isPalindrome(num) {
    return num === parseInt((num + '').split('').reverse().join('')) ? num : false;
}

function largestPalindrome(n) {
    let max, min, biggestNumber;
    let count = 0;
    let palindrome = [];
    switch (n) {
    case 2:
        max = 99;
        min = 10;
        biggestNumber = min * min;
        break;
    case 3:
        max = 999;
        min = 100;
        biggestNumber = min * min
        break;
    default:
        break;
    }

    for (let i = max; i > min; i--) {
        for (let j = max; j > min; j--) {
            if (isPalindrome((i * j)) && (i * j) > biggestNumber) {
                biggestNumber = i * j;
                palindrome.push([i, j]);
            }
            count++;
        }
    }
    return [(palindrome.sort())[0], biggestNumber, count];

}

largestPalindrome(3);
