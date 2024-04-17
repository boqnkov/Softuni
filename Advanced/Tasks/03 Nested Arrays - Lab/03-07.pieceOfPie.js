function pieceOfPie(...params) {
    let arr = params[0];
    const firstFlavour = params[1];
    const secondFlavour = params[2];

    const idxFirst = arr.indexOf(firstFlavour);
    const idxSecond = arr.indexOf(secondFlavour);

    const result = arr.slice(idxFirst, idxSecond + 1);
    return result
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)