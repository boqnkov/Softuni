function vetParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);

    let sum = 0;
    let daySum = 0

    for (let d = 1; d <= days; d++) {
        for (let h = 1; h <= hours; h++) {
            if (d % 2 === 0 && h % 2 !== 0) {
                daySum += 2.5
            } else if (d % 2 !== 0 && h % 2 === 0) {
                daySum += 1.25
            } else {
                daySum += 1
            }
        }

        sum += daySum
        console.log(`day: ${d} - ${daySum}`);
        daySum = 0
    }


    console.log(`total ${sum}`);

}
vetParking(['2', '5'])