function areaFigures(input) {
    let secondElem = Number(input[1]);
    let thirdElem = Number(input[2]);
    if ((input[0]) == 'square') {
        console.log((secondElem * secondElem).toFixed(3));
    } else if ((input[0]) == 'rectangle') {
        console.log((secondElem * thirdElem).toFixed(3));
    } else if ((input[0]) == 'circle') {
        console.log((secondElem * secondElem * Math.PI).toFixed(3));
    } else if ((input[0]) == 'triangle'){
    console.log((secondElem * thirdElem / 2).toFixed(3));
    }
}

areaFigures(["triangle", "4.5", "20"]);