function lastKNums(...params) {
    const n = params[0];
    const k = params[1];

    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sliced = arr.slice(-k)
        let curSum = sliced.reduce((acc, value) => acc + value)

        arr.push(curSum)
    }

    return arr
}
lastKNums(6, 3)