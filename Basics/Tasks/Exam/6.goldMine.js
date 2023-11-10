function gold(input) {
    let i = 0
    let locations = Number(input[i])

    let expAvgPerDay = 0
    let digDays = 0
    let y = 1

    for (let i = 1; i <= locations; i++) {
        expAvgPerDay = Number(input[y])
        y++
        digDays = Number(input[y])
        y++
        let dailyGold = 0
        let locationGold = 0
        let z = 0

        for (z = y; z < digDays + y; z++) {
            dailyGold = Number(input[z])

            locationGold += dailyGold
        }

        let avgLocGold = locationGold / digDays
        let diff = Math.abs(avgLocGold - expAvgPerDay)

        if (expAvgPerDay > avgLocGold) {
            console.log(`You need ${diff.toFixed(2)} gold.`);

        } else {
            console.log(`Good job! Average gold per day: ${avgLocGold.toFixed(2)}.`);
        }
        y = z
    }

}
gold(['1',
    '5',
    '3',
    '10',
    '1',
    '3',
])