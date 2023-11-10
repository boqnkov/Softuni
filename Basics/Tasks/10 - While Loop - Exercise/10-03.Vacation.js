function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    let i = 2;
    let action = input[i];

    let daysCounter = 0;
    let spendsCounter = 0;

    while (i < input.length) {

        let money = Number(input[i + 1]);
        if (action === 'spend') {
            moneyAvailable -= money;
            spendsCounter++

            if (0 >= moneyAvailable) {
                moneyAvailable = 0;
            }

        } else if (action === 'save') {
            moneyAvailable += money
            spendsCounter = 0
        }

        daysCounter++

        if (spendsCounter === 5) {
            console.log(`You can't save the money.`);
            console.log(`${daysCounter}`);
        }

        if (moneyAvailable >= moneyNeeded) {
            console.log(`You saved the money for ${daysCounter} days.`);
        }

        i += 2
        action = input[i]

    }

}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])





