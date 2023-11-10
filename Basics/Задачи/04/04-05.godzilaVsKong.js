function godzilaVsKong(input) {


    let budgetAvailable = Number(input[0]);
    let artistsCount = Number(input[1]);
    let dressPricePerArt = Number(input[2]);

    let decorate = budgetAvailable * 0.1;
    if (artistsCount > 150) {
        dressPricePerArt *= 0.9;
    }

    let moneyNeeded = (artistsCount * dressPricePerArt) + decorate;
    let diff = Math.abs(budgetAvailable - moneyNeeded).toFixed(2);
    if (budgetAvailable < moneyNeeded) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff} leva left.`)
    }


}

godzilaVsKong(["20000",
    "120",
    "55.5"]);
