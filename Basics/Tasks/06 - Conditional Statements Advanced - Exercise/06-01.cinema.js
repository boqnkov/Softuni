function cinema(input) {
    let projectionType = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);

    let places = rows * colums;
    let profit = 0;

    if (projectionType == 'Premiere') {
        profit = places * 12;
    } else if (projectionType == 'Premiere') {
        profit = places * 12;
    } else if (projectionType == 'Normal') {
        profit = places * 7.5;
    } else if (projectionType == 'Discount') {
        profit = places * 5;
    }
    console.log(`${profit.toFixed(2)} leva`);

}
cinema
    (["Discount",
        "12",
        "30"])

