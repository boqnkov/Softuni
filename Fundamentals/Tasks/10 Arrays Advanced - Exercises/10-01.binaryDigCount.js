function binaryCount(int, b) {

    let numBin = int.toString(2)
    let counter = 0
    for (let curB of numBin) {
        if (curB == b) {
            counter++
        }
    }
    console.log(counter);
}
binaryCount(20, 0)