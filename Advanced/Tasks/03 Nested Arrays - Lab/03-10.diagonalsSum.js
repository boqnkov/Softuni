function diagonalsSum(matrix) {
let main = 0;
let second =0;

for (let i = 0; i<matrix.length; i++){
    main+=matrix[i][i]
    second+= matrix[i][matrix.length-1-i]
}
console.log(main, second);
}
diagonalsSum([[3, 5, 17],
            [-1, 7, 14],
            [1, -8, 89]]
)