function toyShop(input) {

    let tripPrice = Number(input[0]);
    let puzzels = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let trucks = Number(input[5]);

    let moneyWon = puzzels * 2.6 + doll * 3 + bear * 4.1 + minion * 8.2 + trucks * 2;
    let toysCount = puzzels + doll + bear + minion + trucks;
    if (toysCount >= 50) {
        moneyWon *= 0.75
    }
    let moneyAfterRent = moneyWon * 0.9;
    let moneyLeft = Math.abs(moneyAfterRent - tripPrice).toFixed(2);

    if (moneyAfterRent >= tripPrice) {
        console.log(`Yes! ${moneyLeft} lv left.`);
    } else {
        console.log(`Not enough money! ${moneyLeft} lv needed.`);

    }

}

toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"]);
