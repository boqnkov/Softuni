function pipesInPool(input) {
 
    let volume = Number(input[0]);
    let firstPipeDeb = Number(input[1]);
    let secondPipeDeb = Number(input[2]);
    let hoursMissing = Number(input[3]);

    let waterFromFirstPipe = firstPipeDeb * hoursMissing
    let waterFromSecondPipe = secondPipeDeb * hoursMissing
    let totalWater = waterFromFirstPipe + waterFromSecondPipe
    
    let percent1 = waterFromFirstPipe/totalWater*100
    let percent2 = waterFromSecondPipe/totalWater*100

    let percentOfPool = totalWater/volume*100
    let diff = Math.abs(totalWater - volume)

    if (volume>=totalWater){
        console.log(`The pool is ${percentOfPool}% full. Pipe 1: ${percent1}%. Pipe 2: ${percent2}%.`);
    } else {
        console.log(`For ${hoursMissing} hours the pool overflows with ${diff} liters.`);
    }

}
pipesInPool(['1000',
    '100',
    '120',
    '3',
    ])