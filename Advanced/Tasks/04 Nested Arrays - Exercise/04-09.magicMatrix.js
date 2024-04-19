function magicMatrix(arr) {

    let sum = arr[0].reduce((acc, value) => acc + value)
    for (let i = 0; i < arr.length; i++) {

        let curSum = arr[i].reduce((acc, value) => acc + value)
        if (sum !== curSum) {
            return false
        }
        curSum = 0
        for (let j = 0; j < arr[i].length; j++) {
            curSum += arr[i][j]
        }
        if (sum !== curSum) {
            return false
        }

    }

    return true

}
magicMatrix([[3, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)
console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
    ));