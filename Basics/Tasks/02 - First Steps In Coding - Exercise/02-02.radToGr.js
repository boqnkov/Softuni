function radToDeg(input) {

    let rad = Number(input[0]);
    let degr = rad * 180 / Math.PI;

    console.log(degr);
}
radToDeg(["3.1416"]);