function puppy(input) {

    let food = Number(input[0]) * 1000
    let command = input[1]
    let i = 2
    let totalNeededFood = 0

    while (command !== 'Adopted') {

        let dailyFood = Number(command)
        totalNeededFood += dailyFood

        command = input[i]
        i++


    }
    let diff = Math.abs(totalNeededFood - food)
    if (totalNeededFood > food) {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    } else {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    }
}
puppy(['4',
    '130',
    '345',
    '400',
    '180',
    '230',
    '120',
    'Adopted'])