function rotate(arr, num) {
    for (let i = 1; i <= num; i++) {
        let temp = arr.pop();
        arr.unshift(temp)
    }
    console.log(arr.join(' '));
}
rotate(['1',
    '2',
    '3',
    '4'],
    2
)