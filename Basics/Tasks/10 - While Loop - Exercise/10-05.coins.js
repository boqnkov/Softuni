function coins(input) {

    let changeLv = Number(input[0]);
    let change = Math.round(changeLv * 100);
    let coinCounter = 0;

    while (change > 0) {
        if (change >= 200) {
            coinCounter++
            change -= 200
        } else if (change >= 100) {
            coinCounter++
            change -= 100
        } else if (change >= 50) {
            coinCounter++
            change -= 50
        } else if (change >= 20) {
            coinCounter++
            change -= 20
        } else if (change >= 10) {
            coinCounter++
            change -= 10
        } else if (change >= 5) {
            coinCounter++
            change -= 5
        } else if (change >= 2) {
            coinCounter++
            change -= 2
        } else if (change >= 1) {
            coinCounter++
            change -= 1
        }
    }
    console.log(coinCounter);

}
coins(["2"])