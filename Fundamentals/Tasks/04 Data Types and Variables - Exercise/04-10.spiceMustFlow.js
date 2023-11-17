function spiceMustFlow(currYield) {

    let yield = 0
    let day = 0
    while (currYield >= 100) {
        day++

        if (currYield < 100) {
            brake
        }


        yield += currYield
       
        if (yield>26){
        yield -= 26
        } else {
            yield-=currYield
        }
        currYield -= 10
    }
    if (yield>26){
        yield -= 26
        } else {
            yield-=currYield
        }

    console.log(day);
    console.log(yield);

}
spiceMustFlow(101)