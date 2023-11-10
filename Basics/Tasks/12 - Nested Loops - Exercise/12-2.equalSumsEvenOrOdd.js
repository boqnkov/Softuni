function equalSums(input) {

    let firstNum = input[0];
    let secondNum = input[1];
    let result = ''

    for (let curNum = firstNum; curNum <= secondNum; curNum++) {
        let curNumStr = String(curNum);
        let sumOddPos = 0;
        let sumEvenPos = 0;

        for (let i = 0; i < curNumStr.length; i++) {

            let digit = Number(curNumStr[i]);
            let position = i + 1;

            if (position % 2 === 0) {
                sumEvenPos += digit
            } else {
                sumOddPos += digit
            }
        }

        if (sumEvenPos === sumOddPos) {

            result += curNum + ' '
        }
    }
    console.log(result);

}
equalSums(["100000",
    "100050"])
