function sortingNums(arr) {
    let result = [];
    arr.sort((a, b) => a - b)
    let i = 0
    while (arr.length > 0) {
        if (i % 2 == 0) {
            result.push(arr.shift());
        } else {
            result.push(arr.pop())
        }
        i++
    }
    return result
}
console.log(sortingNums([1, 65, 3]))