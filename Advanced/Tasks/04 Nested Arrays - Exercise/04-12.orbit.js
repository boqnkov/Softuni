function orbit([width, height, x, y]) {
    
    const matrix = new Array(width).fill().map((e) => new Array(height).fill(0))

    for (let row = 0; row < width; row++){
        for (let col = 0 ; col< height; col++){
            matrix [row][col] = Math.max(Math.abs(row-x), Math.abs(col - y))+1
        }
    }

    const output = matrix.map((row) => row.join(' ')).join('\n')
    console.log(output);
}
orbit([4, 4, 0, 0])
