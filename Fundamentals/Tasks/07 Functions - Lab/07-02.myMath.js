function myMath(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result = multiplyTwoNums(result, x)
    }

    function multiplyTwoNums(a, b) {
        return a * b
    }
    return result
}
myMath(2, 8)
