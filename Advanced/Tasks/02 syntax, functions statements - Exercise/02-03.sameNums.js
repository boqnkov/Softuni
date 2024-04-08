function sameNums(input) {
    let arr = input.toString().split('')
    let sum = 0
    let isSame = true
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        sum+=Number(currentNum);

        if (arr[0] !== arr[i]){
            isSame = false
        }
    }

    console.log(isSame);
    console.log(sum);
}
sameNums(1211)