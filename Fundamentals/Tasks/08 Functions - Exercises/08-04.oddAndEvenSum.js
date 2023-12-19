function oddAndEvenSum(num) {
    
    let numAsStr = String(num);
    let [oddSum, evenSum] = calcSums(numAsStr)


    function calcSums(str) {
        let oddSum = 0;
        let evenSum = 0;

        for (let char of numAsStr) {
            let curNum = Number(char);
            if (curNum % 2 == 0) {
                evenSum += curNum
            } else {
                oddSum += curNum
            }
        }
        return [oddSum,evenSum]
    }


    
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


}
oddAndEvenSum(3495892137259234)