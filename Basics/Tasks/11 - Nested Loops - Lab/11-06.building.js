function building(input) {

    let floorCount = Number(input[0]);
    let siteCount = Number(input[1]);

    for (curFloor = floorCount; curFloor > 0; curFloor--) {
        let floorrow = '';
        for (curSite = 0; curSite < siteCount; curSite++) {

            if (curFloor !== floorCount) {
                if (curFloor % 2 === 0) {
                    floorrow += (`O${curFloor}${curSite} `)
                } else {
                    floorrow += (`A${curFloor}${curSite} `)
                }
            } else {
                floorrow += (`L${curFloor}${curSite} `)
            }

        }
        console.log(floorrow);
    }

}
building(["6", "4"])

