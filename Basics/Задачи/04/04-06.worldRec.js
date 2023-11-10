function worldRec(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMt = Number(input[2]);

    let timeDelay = Math.floor(distance/15);
    let timeDelayReal = timeDelay*12.5;

    let ivanTime = ((distance*timePerMt)+timeDelayReal).toFixed(2);

    let diff = Math.abs(record-ivanTime).toFixed(2);

    if (ivanTime<record) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff} seconds slower.`)
    }

}

worldRec(["55555.67",
"3017",
"5.03"])

