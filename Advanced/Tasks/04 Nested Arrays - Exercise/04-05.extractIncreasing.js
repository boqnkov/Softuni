function extract(arr) {

    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {

        let curNum = arr[i];
        let lastBigNum = result[result.length - 1]
        if (curNum >= lastBigNum) {
            result.push(curNum)
        }
    }
    return result
}

function extract2(arr) {
    let biggestOne = arr[0];

    return arr.filter(x => {
        if (x >= biggestOne) {
            biggestOne = x;
            return true;

        }
        return false
    }

    )
}
extract([20,
    3,
    2,
    15,
    6,
    1])
