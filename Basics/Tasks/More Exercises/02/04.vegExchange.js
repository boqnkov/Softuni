function vegExchange(input) {
let priceVeg = Number(input[0]);
let priceFruit = Number(input[1]);
let kilosVeg = Number(input[2]);
let kilosFruit = Number(input[3]);

let income = (priceVeg*kilosVeg) + (priceFruit*kilosFruit);
let incomeEuro = income/1.94;
let incomeEuroResult = incomeEuro.toFixed(2);

console.log(incomeEuroResult);


}

vegExchange(["0.194","19.4","10","10"]);