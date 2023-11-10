function sumOf2Nums(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationCounter = 0;
    for (let curNum1 = start; curNum1 <= end; curNum1++) {
        for (let curNum2 = start; curNum2 <= end; curNum2++) {

            combinationCounter++
            if (curNum1 + curNum2 === magicNum) {
                console.log(`Combination N:${combinationCounter} (${curNum1} + ${curNum2} = ${magicNum})`);
                return
            }
        }
    }

    console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
}
sumOf2Nums(["23",
    "24",
    "20"])

