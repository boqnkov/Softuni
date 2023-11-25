function subtraction(input) {

    let evenSum = 0;
    let oddSum = 0;

    for (let curElement of input) {
        if (curElement % 2 == 0) {
            evenSum += curElement
        } else {
            oddSum += curElement
        }
    }
    let result = evenSum - oddSum
    console.log (result);

    
}
subtraction([1, 2, 3, 4, 5, 6])