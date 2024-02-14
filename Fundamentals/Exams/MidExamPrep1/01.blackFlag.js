function blackFlag(arr) {

    let days = Number(arr.shift());
    let dayPlunder = Number(arr.shift());
    let expectedPlunder = Number(arr.shift())

    let totalGain = 0

    for (let i = 1; i <= days; i++) {
        if (i % 3 == 0) {
            totalGain += 1.5 * dayPlunder
        } else if (i % 5 == 0) {
            totalGain += dayPlunder
            totalGain *= 0.7
        } else {
            totalGain += dayPlunder
        }
    }

    let percent = (totalGain/expectedPlunder)*100

    if (totalGain >= expectedPlunder) {
        console.log(`Ahoy! ${totalGain.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }


}
blackFlag(["5",
    "40",
    "100"])

    blackFlag(["10",
    "20",
    "380"])
    
