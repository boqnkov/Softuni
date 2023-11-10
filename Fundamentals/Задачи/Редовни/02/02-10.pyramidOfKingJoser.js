function pyramidOfKingDjoser(base, increment) {

    let stoneForCurrRow = 0
    let stoneTotal = 0
    let marbleForCurrRow = 0
    let marbleTotal = 0
    let lapisForCurrRow = 0
    let lapisTotal = 0
    let goldtotal = 0

    let rowCounter = 0
    let stepsCounter = 0

    for (let a = base; a >= 1; a -= 2) {
        rowCounter++
        stepsCounter++

        if (a <= 2) {
            goldtotal = a * a
            break
        }

        if (rowCounter == 5) {

            stoneForCurrRow = (a - 2) * (a - 2)
            stoneTotal += stoneForCurrRow

            lapisForCurrRow = (a * 4) - 4
            lapisTotal += lapisForCurrRow
            rowCounter = 0
        } else {

            stoneForCurrRow = (a - 2) * (a - 2)
            stoneTotal += stoneForCurrRow

            marbleForCurrRow = (a * 4) - 4
            marbleTotal += marbleForCurrRow
        }

    }
    let pyramidHeight = stepsCounter * increment

    console.log(`Stone required: ${Math.ceil(stoneTotal * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleTotal * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisTotal * increment)}`);
    console.log(`Gold required: ${Math.ceil(goldtotal * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);

}
pyramidOfKingDjoser(23, 0.5)