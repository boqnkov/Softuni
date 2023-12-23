function negOrPosNums(arr) {

    let result = []

    for (let currEl of arr) {

        if (Number(currEl) >= 0) {
            result.push(Number(currEl))
        } else {
            result.unshift(Number(currEl))
        }
    }

    console.log(result.join('\n'));
}
negOrPosNums(['7', '-2', '8', '9'])