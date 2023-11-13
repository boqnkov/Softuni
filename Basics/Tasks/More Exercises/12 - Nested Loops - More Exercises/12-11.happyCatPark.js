function happyCat(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);

    let totalPrice = 0

    for (let x = 1; x <= days; x++) {
        let pricePerDay = 0;
        for (let y = 1; y <= hours; y++) {
            if (x % 2 === 0 && y % 2 === 1) {
                pricePerDay += 2.5
            } else if (x % 2 === 1 && y % 2 === 0) {
                pricePerDay += 1.25
            } else {
                pricePerDay += 1
            }
        }
        console.log(`Day: ${x} - ${pricePerDay.toFixed(2)} leva`);
        totalPrice += pricePerDay
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
happyCat(['2', '5'])