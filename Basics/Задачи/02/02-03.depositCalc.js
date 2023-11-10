function depositCalculator(input) {

let depSum = Number(input[0]);
let depPeriod = Number(input[1]);
let annualInterestPercent = Number(input[2])/100;

let sum = depSum + depPeriod * ((depSum*annualInterestPercent)/12);

console.log(sum);

}

depositCalculator(["200", "3", "5.7"])