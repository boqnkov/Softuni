function magicMatrix(arr) {

    let sum = arr[0].reduce((acc, value) => acc + value)
    for (let i = 0; i < arr.length; i++) {

        let sumRow =0 ;
        let sumCol = 0;

        
        for (let j = 0; j < arr.length; j++) {
            sumRow += arr[i][j]
            sumCol += arr[j][i]
        }
        if (sum !== sumRow || sum !== sumCol) {
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