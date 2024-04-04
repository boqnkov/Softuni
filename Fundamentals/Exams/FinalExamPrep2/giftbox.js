function giftBox(input) {
    let sizeOfSide = Number(input.shift());
    let countSheets = Number(input.shift());

    let giftBoxArea = 6 * sizeOfSide * sizeOfSide;
    let totalPaperArea = 0;
    
    for (let i = 1; i <= countSheets; i++) {
        let length = Number(input.shift());
        let width = Number(input.shift());

        let sheetArea = length * width;


        if (i % 3 === 0) {
            sheetArea *= 0.75;
        }

        if (i % 5 === 0) {
            continue
        }
        totalPaperArea += sheetArea;
    }



    if (totalPaperArea >= giftBoxArea) {
        let coveragePercentage = ((totalPaperArea - giftBoxArea) / totalPaperArea) * 100;
        console.log(`You've covered the gift box!\n${coveragePercentage.toFixed(2)}% wrap paper left.`);
    } else {
        let coveragePercentage = (totalPaperArea / giftBoxArea) *100
        let unusedPaperPercentage = 100 - coveragePercentage;
        console.log(`You are out of paper!\n${unusedPaperPercentage.toFixed(2)}% of the box is not covered.`);
    }
}

giftBox(["2",
    "2",
    "0.2",
    "7",
    "6",
    "8.5"])

    // giftBox(["10",
    // "5",
    // "3",
    // "0.5",
    // "2.4",
    // "5",
    // "3.7",
    // "1",
    // "3",
    // "34.7",
    // "5",
    // "80"])
    