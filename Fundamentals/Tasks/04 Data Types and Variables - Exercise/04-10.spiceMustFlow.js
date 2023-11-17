function spiceMustFlow(currYield) {

    let yield = 0
    let day = 0

    while (currYield >= 100) {
        day++

        yield += currYield - 26

        currYield -= 10
    }

    if (yield >= 26) {
        yield -= 26
    }

    console.log(day);
    console.log(yield);

}
spiceMustFlow(101)