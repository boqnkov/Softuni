function calculator(numOne, numTwo, operator) {
    let multiplyResult = (a, b) => a * b
    let divideResult = (a, b) => a / b
    let addResult = (a, b) => a + b
    let subtractResult = (a, b) => a - b
    let result = 0
    
    switch (operator) {
        case 'multiply': result = multiplyResult(numOne, numTwo); break;
        case 'divide': result =divideResult(numOne, numTwo); break
        case 'add': result =addResult(numOne, numTwo); break
        case 'subtract': result =subtractResult(numOne, numTwo); break
    }
    console.log(result);
    
}
calculator(5,
    5,
    'multiply'
)