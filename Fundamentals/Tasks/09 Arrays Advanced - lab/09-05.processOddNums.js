function processOddNums(arr) {

    let oddIndexes = arr.filter((x, i) => i % 2 != 0);
    let doubledArr = oddIndexes.map(x => x * 2);
    let reversed = doubledArr.reverse();
    console.log(reversed.join(' '));
}
processOddNums([10, 20, 30, 40, 50, 60])