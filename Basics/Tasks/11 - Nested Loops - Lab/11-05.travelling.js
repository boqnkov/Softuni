function travelling(input) {

    let command = input[0];
    let index = 1;

    while (command !== 'End') {
        let curDest = command;
        let moneyNeeded = Number(input[index]);
        index++;

        let savedMoney = 0;

        while (savedMoney < moneyNeeded) {
            let curMoney = Number(input[index]);
            index++

            savedMoney += curMoney

        }
        console.log(`Going to ${curDest}!`);
        command = input[index];
        index++


    }
}
travelling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])

