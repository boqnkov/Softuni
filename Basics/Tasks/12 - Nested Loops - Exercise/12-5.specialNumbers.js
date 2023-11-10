function specialNums(input) {

    let N = Number(input[0]);

    let toPrinted = ''
    for (let curNum = 1111; curNum < 9999; curNum++) {
        let isSpecial = true
        let curNumString = String(curNum);
        let result = ''
        for (i = 0; i < curNumString.length; i++) {
            let digit = Number(curNumString[i]);

            if (N % digit !== 0) {
                isSpecial = false;
                break

            }
        }
        if (isSpecial) {
            toPrinted += `${curNumString} `
        }

    }
    console.log(toPrinted)

}
specialNums(["3"])