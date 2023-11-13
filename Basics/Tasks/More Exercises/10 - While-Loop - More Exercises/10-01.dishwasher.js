function dishwasher(input) {

    let bottleCount = Number(input[0]);
    let totalMl = bottleCount * 750;

    let dishes = 0;
    let pots = 0;
    for (let i = 1; i <= input.length; i++) {
        if (totalMl < 0) {
            let diff = Math.abs(totalMl)
            console.log(`Not enough detergent, ${diff} ml. more necessary!`)
        }

        if (i % 3 !== 0 && input[i] !== 'End') {
            dishes += Number(input[i]);
            totalMl = totalMl - (Number(input[i])) * 5


        } else if (i % 3 === 0 && input[i] !== 'End') {
            pots += Number(input[i]);
            totalMl = totalMl - (Number(input[i])) * 15;

        } else if (input[i] === 'End') {
            console.log(`Detergent was enough!`);
            console.log(`${dishes} dishes and ${pots} pots were washed.`);
            console.log(`Leftover detergent ${totalMl} ml.`);
            break;

        }
    }
}

dishwasher(['2',
    '53',
    '65',
    '55',
    'End',

])