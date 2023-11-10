function demo(input) {
    let locations = Number(input.shift())
    let sum = 0;
    let avgSum = 0
    for (let i = 0; i < locations; i++) {
        let avgPerDay = Number(input.shift())
        let days = Number(input.shift())
        for (let k = 0; k < days; k++) {
            sum += Number(input.shift())
        }
        avgSum = sum / days
        if (avgSum >= avgPerDay) {
            console.log(`Good job! Average gold per day: ${avgSum.toFixed(2)}.`);
        } else {
            console.log(`You need ${(avgPerDay - avgSum).toFixed(2)} gold.`);
        }
        sum = 0;
    }

}
demo(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])
