function blackFlag(arr) {

    let days = Number(arr[0]);
    let dayPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2])

    let totalGain = 0

    for (let i = 1; i <= days; i++) {
        totalGain += dayPlunder

        if (i % 3 === 0) {
            totalGain += (0.5 * dayPlunder)
        }
        if (i % 5 === 0) {

            totalGain -= (totalGain * 0.3)
        }
    }


    if (totalGain >= expectedPlunder) {
        console.log(`Ahoy! ${totalGain.toFixed(2)} plunder gained.`);
    } else {
        let percent = (totalGain / expectedPlunder) * 100
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }

}
blackFlag(["5",
    "40",
    "100"])

blackFlag(["10",
    "20",
    "380"])

