function solve(input) {
    let index = 0;

    let numberLocation = Number(input[index]);
    index++;

    let avgGold = 0;



    for (let l = 0; l < numberLocation; l++) {
        let goldFor1DayExpected = Number(input[index]);
        index++;
        let daysForThisLocation = Number(input[index]);
        index++;
        let sumGold = 0;
        for (let day = 0; day < daysForThisLocation; day++) {
            let daysfor1DayGold = Number(input[index]);
            index++;
            sumGold += daysfor1DayGold;
        }
        avgGold = sumGold / daysForThisLocation;
        let diff = Math.abs(goldFor1DayExpected - avgGold);
        if (avgGold < goldFor1DayExpected) {
            console.log(`You need ${(diff).toFixed(2)} gold.`);
        } else {
            console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`);

        }

    }


}