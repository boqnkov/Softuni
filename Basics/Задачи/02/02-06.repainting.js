function repainting(input) {

let nylonPrice = (Number(input[0])*1.5) + 3;
let paintNeededPrice = (Number(input[1])*14.5)*1.1;
let razreditelPrice = Number(input[2]) * 5;
let materialPrice = nylonPrice + paintNeededPrice + razreditelPrice + 0.4;
let servicePrice = materialPrice*0.3*Number(input[3]);

let finalPrice = materialPrice + servicePrice;

console.log(finalPrice);

}

repainting(["10","11","4","8"])