function lettersChangeNums(input) {

    let arr = input.split(' ')
    let finalResult = 0

    for (let unknownString of arr) {
        let curString = unknownString.trim();
        if (curString == ''){
            continue
        }
        let firstLet = curString[0];
        let secondLet = curString[curString.length - 1];
        let num = Number(curString.substring(1, curString.length - 1));
        
        let midResult = 0

        if (firstLet == firstLet.toUpperCase()) {
            let firstLetAscii = firstLet.charCodeAt()
            let alphabetPosition = firstLetAscii - 64
            midResult += num / alphabetPosition
        } else {
            let firstLetAscii = firstLet.charCodeAt()
            let alphabetPosition = firstLetAscii - 96
            midResult += num * alphabetPosition
        }

        if (secondLet == secondLet.toUpperCase()) {
            let secondLetAscii = secondLet.charCodeAt()
            let alphabetPosition = secondLetAscii - 64
            midResult -= alphabetPosition
        } else {
            let secondLetAscii = secondLet.charCodeAt()
            let alphabetPosition = secondLetAscii - 96
            midResult += alphabetPosition
        }
        finalResult += midResult;
    }

    console.log(finalResult.toFixed(2));
}
// lettersChangeNums('A12b s17G')
lettersChangeNums('P34562Z q2576f   H456z')
// lettersChangeNums('a1A')