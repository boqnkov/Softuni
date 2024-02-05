function maxSeqOfEqEls(arr) {

    let temporaryArr = []
    let winArr = []

    for (let i = 0; i < arr.length; i++) {
        if ((winArr.length == 0) || (winArr.length != 0 & winArr[winArr.length - 1] == arr[i])) {
            winArr.push(arr[i])
        } else {
            if ((temporaryArr.length == 0) || (temporaryArr.length != 0 & temporaryArr[temporaryArr.length - 1] == arr[i])) {
                temporaryArr.push(arr[i])

            } else {
                temporaryArr = []
                temporaryArr.push(arr[i])
            }
        }
        if (winArr.length < temporaryArr.length) {
            winArr = temporaryArr
            temporaryArr = []
        }
    }
    

    console.log(winArr.join(' '));
}
maxSeqOfEqEls([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
// maxSeqOfEqEls([0, 1, 1, 5, 2, 2, 6, 3, 3])