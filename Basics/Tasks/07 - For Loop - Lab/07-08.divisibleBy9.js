function divBy9(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;


    for (let i = num1; i < num2; i++) {
        let currentNumber = i

        if (currentNumber % 9 === 0) {
            sum += currentNumber;

        }

    }
    console.log(`The sum: ${sum}`);
    for (let i = num1; i < num2; i++) {
        let currentNumber = i

        if (currentNumber % 9 === 0) {
            console.log(currentNumber);
        }

    }

}
divBy9(["100", "200"])