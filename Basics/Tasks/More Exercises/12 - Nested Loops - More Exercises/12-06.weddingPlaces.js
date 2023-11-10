function wedPlaces(input) {

    let endSector = input[0];
    let aRows = Number(input[1]);
    let placesOddRow = Number(input[2]);

    let s1 = ''
    let s2 = 0
    let s3 = ''
    let counter = 0
    for (let i = 65; i <= endSector.charCodeAt(0); i++) {
        for (let x = 1; x <= aRows; x++) {
            if (x % 2 !== 0) {
                for (let y = 1; y <= placesOddRow; y++) {

                    s1 = String.fromCharCode(i)
                    s2 = x
                    s3 = String.fromCharCode(y + 96)
                    counter++
                    console.log(`${s1}${s2}${s3}`);
                }
            } else {
                for (let y = 1; y <= placesOddRow + 2; y++) {

                    s1 = String.fromCharCode(i)
                    s2 = x
                    s3 = String.fromCharCode(y + 96)
                    counter++
                    console.log(`${s1}${s2}${s3}`);
                }
            }
        }
        aRows++
    }
    console.log(counter);
}
wedPlaces(['B',
    '3',
    '2'])