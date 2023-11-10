function deerOfSanta(input) {

    let daysMissing = Number(input[0]);
    let leftFood = Number(input[1]);
    let foodPerDay1Deer = Number(input[2]);
    let foodPerDay2Deer = Number(input[3]);
    let foodPerDay3Deer = Number(input[4]);

    let neededFood = (foodPerDay1Deer + foodPerDay2Deer + foodPerDay3Deer) * daysMissing;

    let diff = Math.abs(neededFood - leftFood);

    if (leftFood > neededFood) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }

}
deerOfSanta(['2',
    '10',
    '1',
    '1',
    '2',
])