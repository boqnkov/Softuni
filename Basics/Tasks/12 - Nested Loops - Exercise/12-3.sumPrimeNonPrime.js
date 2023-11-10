function sumPr(input) {

    let command = input[0]
    let index = 1
    let primeNumSum = 0;
    let nonPrimeSum = 0;

    while (command !== 'stop') {
        command = Number(command);
        let curNum = command;
        let isPrime = true
        if (curNum < 0) {
            console.log('Number is negative.');
            command = input[index]
            index++
            continue;
        }

        for (let y = 2; y < curNum; y++) {
            if (curNum % y === 0) {
                nonPrimeSum += curNum
                isPrime = false
                break;
            }
        }
        if (isPrime) {
            primeNumSum += curNum
        }
        command = input[index]
        index++
    }
    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPr(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])



