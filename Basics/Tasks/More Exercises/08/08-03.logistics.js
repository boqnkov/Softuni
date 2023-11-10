function logistics(input) {

    let loadsCount = Number(input[0]);

    let busLoad = 0
    let truckLoad = 0
    let trainLoad = 0

    let price = 0

    let busCounter = 0
    let truckCounter = 0
    let trainCounter = 0

    for (let i = 1; i <= loadsCount; i++) {
        let currLoad = Number(input[i])

        if (currLoad <= 3) {
            busLoad += currLoad
            price += currLoad * 200
            busCounter++
        } else if (currLoad <= 11) {
            truckLoad += currLoad
            price += currLoad * 175
            truckCounter++
        } else {
            trainLoad += currLoad
            price += currLoad * 120
            trainCounter++
        }

    }
    let allLoads = busLoad + truckLoad + trainLoad
    let avgPrice = price / allLoads
    console.log(avgPrice.toFixed(2));
    let busPercent = busLoad / allLoads * 100
    let truckPercent = truckLoad / allLoads * 100
    let trainPercent = trainLoad / allLoads * 100

    console.log(`${busPercent.toFixed(2)}%`);
    console.log(`${truckPercent.toFixed(2)}%`);
    console.log(`${trainPercent.toFixed(2)}%`);
}
logistics(['4',
    '1',
    '5',
    '16',
    '3',
])