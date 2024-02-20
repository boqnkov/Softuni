function burgerBus(arr) {

    let numsOfCity = Number(arr.shift());
    let totalProfit = 0;
    let cityCounter = 1
    for (let i = 0; i < arr.length; i += 3) {
        let city = arr[i];
        let earnedMoney = Number(arr[i + 1]);
        let expences = Number(arr[i + 2]);

        if (cityCounter % 5 == 0) {
            earnedMoney *= 0.9

            let curProfit = earnedMoney - expences

        totalProfit += curProfit
        console.log(`In ${city} Burger Bus earned ${curProfit.toFixed(2)} leva.`);
        cityCounter++
        continue
        }

        if (cityCounter % 3 == 0) {
            expences *= 1.5
        }

        let curProfit = earnedMoney - expences

        totalProfit += curProfit
        console.log(`In ${city} Burger Bus earned ${curProfit.toFixed(2)} leva.`);
        cityCounter++
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);

}
// burgerBus((["3",
//     "Sofia",
//     "895.67",
//     "213.50",
//     "Plovdiv",
//     "2563.20",
//     "890.26",
//     "Burgas",
//     "2360.55",
//     "600.00"])
// )

burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])
