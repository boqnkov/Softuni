function reportSystem(input) {

    let moneyNeeded = Number(input[0]);
    let command = input[1];
    let i = 2;
    let sumTotalCash = 0;
    let sumTotalCard = 0;
    let counterCash = 0;
    let counterCard = 0


    while (command !== 'End') {

        let currentAmountCash = Number(command);

        if (currentAmountCash > 100) {
            console.log(`Error in transaction!`);
        } else {
            console.log(`Product sold!`);
            sumTotalCash += currentAmountCash
            counterCash++
        }

        command = input[i];
        i++

        let currentAmountCard = Number(command);

        if (currentAmountCard < 10) {
            console.log(`Error in transaction!`);
        } else {
            console.log(`Product sold!`)
            sumTotalCard += currentAmountCard
            counterCard++
        }

        command = input[i];
        i++

        let sumTotal = sumTotalCard + sumTotalCash;
        if (sumTotal >= moneyNeeded) {
            let avgCS = sumTotalCash / counterCash;
            let avgCC = sumTotalCard / counterCard;
            console.log(`Average CS: ${avgCS.toFixed(2)}`);
            console.log(`Average CC: ${avgCC.toFixed(2)}`);
            break;
        }
    }

    if (command === 'End') {
        let sumTotal = sumTotalCard + sumTotalCash;
        if (sumTotal >= moneyNeeded) {
            let avgCS = sumTotalCash / counterCash;
            let avgCC = sumTotalCard / counterCard;
            console.log(`Average CS: ${avgCS.toFixed(2)}`);
            console.log(`Average CC: ${avgCC.toFixed(2)}`);

        } else {
            console.log(`Failed to collect required money for charity.`);
        }
    }

}
reportSystem(['600', '86', '150', '98', '227', 'End'])