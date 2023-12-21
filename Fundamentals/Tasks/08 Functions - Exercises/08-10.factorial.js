function factorial(num1, num2) {

    let print = calcFact(num1) / calcFact(num2)
    console.log(print.toFixed(2));

    function calcFact(n) {
        let result = 1
        for (let i = 1; i <= n; i++) {
            result *= i
        }
        return result
    }
}
factorial(5, 2)