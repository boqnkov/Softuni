function equalSums(arr) {

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0
        let rightSum = 0
        for (let j = 0; j < i; j++) {
            leftSum += arr[j]
        }
        for (let y = i + 1; y < arr.length; y++) {
            rightSum += arr[y]
        }
        if (leftSum == rightSum) {
            console.log(i);
            return
        }
    }
    console.log('no');

}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])