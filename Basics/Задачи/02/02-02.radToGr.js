function radToGr(input) {

let rad = Number(input[0]);
let grad = rad * 180/Math.PI;

console.log(grad);
}
radToGr(["3.1416"]);