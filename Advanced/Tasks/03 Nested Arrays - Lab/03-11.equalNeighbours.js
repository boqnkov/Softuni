function equalNeighbours(matrix) {
    let counter = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let char = matrix[i][j]
            if (char === matrix[i][j + 1]) {
                counter++
            }
            if (i !== matrix.length - 1) {
                if (char === matrix[i + 1][j]) {
                    counter++
                }
            }
        }
    }
    console.log(counter);
}
equalNeighbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', 'yet']]
)

// equalNeighbours([['2', '3', '4', '7', '0'],
//                 ['4', '0', '5', '3', '4'],
//                 ['2', '8', '5', '4', '2'],
//                 ['9', '2', '7', '5', '5']]
// )