function backToThePast(input) {

    let money = Number(input[0]);
    let year = Number(input[1]);
    let moneyleft = money
    
    
    for (let y = 1800; y <= year; y++) {
        if (y % 2 === 0) {
            moneyleft -= 12000
        } else {
            moneyleft -= (12000 + 50 * (y - 1800 + 18))
        }
    }

    if (moneyleft < 0) {
        console.log(`He will need ${(Math.abs(moneyleft)).toFixed(2)} dollars to survive.`);
    } else {
        (console.log(`Yes! He will live a carefree life and will have ${moneyleft.toFixed(2)} dollars left.`))
    }
}
backToThePast(['50000',
    '1802'
])