function searchForANum(arr1,arr2) {
    let firstArr = arr1.slice(0,arr2[0])
    firstArr.splice(0,arr2[1]);
    let searchedNum = arr2[2]
    let counter = 0
    for (curEl of firstArr){
        
        if (curEl == searchedNum){
            counter++
        }
    }
    console.log(`Number ${searchedNum} occurs ${counter} times.`);
}
searchForANum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )