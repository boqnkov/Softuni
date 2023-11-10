function progr(input) {

    let onePaperPrice = Number(input[0]);
    let oneHeader = Number(input[1]);
    let percentDisc = Number(input[2]);
    let designerPrice = Number(input[3])
    let teamPercent = Number(input[4]);

    let price = onePaperPrice * 899 + oneHeader * 2
    let afterDisc = price - (percentDisc * price / 100)
    let afterDesigner = afterDisc + designerPrice
    let final = afterDesigner - (teamPercent * afterDesigner / 100)

    console.log(`Avtonom should pay ${final.toFixed(2)} BGN.`);
}

progr(['0.01',
    '1',
    '10',
    '20',
    '20',
])