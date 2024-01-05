function bombNums(arr1, arr2) {

    let specialNum = arr2[0];
    let neighbours = arr2[1];

    for (let curNum of arr1) {
        let indexOfCurNum = arr1.indexOf(curNum)
        if (curNum == specialNum) {
            
            arr1.splice((Math.max(0, indexOfCurNum - neighbours)), ((neighbours * 2) + 1),0)
        }
    }

    let sum = 0
    arr1.forEach(num => sum += num)
    console.log(arr1);
    console.log(sum);
}
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])