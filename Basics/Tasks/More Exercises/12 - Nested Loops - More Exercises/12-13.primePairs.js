function primePairs(input) {

    let firstPair = Number(input[0]);
    let secondPair = Number(input[1]);
    let firstPairEnd = firstPair + Number(input[2]);
    let secondPairEnd = secondPair + Number(input[3]);

    for (let x = firstPair; x <= firstPairEnd; x++) {
        for (let y = secondPair; y <= secondPairEnd; y++) {
            let isXPrime = true
            let isYPrime = true
            for (let divisor = 2; divisor < x; divisor++) {
                if (x % divisor === 0) {
                    isXPrime = false
                }
            }

            for (let divisor = 2; divisor < y; divisor++) {
                if (y % divisor === 0) {
                    isYPrime = false
                }
            }

            if (isXPrime && isYPrime) {
                console.log(`${x}${y}`);
            }
        }
    }
}
primePairs(['10',
    '30',
    '9',
    '6'
])