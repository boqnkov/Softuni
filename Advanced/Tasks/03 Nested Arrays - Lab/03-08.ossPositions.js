function oddPositions(arr) {
    let tempArr = []
    let result = ''
    for (let i = 1; i<= arr.length; i+=2){
        tempArr.push((arr[i])*2)
    }
    result = tempArr.reverse().join(' ')
    return result
}
oddPositions([10, 15, 20, 25])