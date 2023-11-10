function housePainting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);



    let greenSurfaces = ((x * x) + (x * x)) - ((1.2 * 2)) + ((x * y) * 2 - 2 * 1.5 * 1.5);
    let redSurfaces = (x * h) + 2 * (x * y);

    let greenPaintNeeded = greenSurfaces / 3.4;
    let redPaintNeeded = redSurfaces / 4.3;

    console.log(greenPaintNeeded.toFixed(2));
    console.log(redPaintNeeded.toFixed(2));

}
housePainting(['6', '10', '5.2'])