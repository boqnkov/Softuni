function accountBallance(input) {

    let command = input[0]
    let index = 1

    let total = 0

    while (command !== 'NoMoreMoney') {

        let currentAmount = Number(command)
        if (currentAmount < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        total += currentAmount;
        console.log(`Increase: ${currentAmount.toFixed(2)}`);

        command = input[index];
        index++;

    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBallance(["120",
    "45.55",
    "-150"])

