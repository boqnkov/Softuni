function specialNums(number) {


    for (let i = 1; i <= number; i++) {
        let iAsString = String(i);
        let result = 0
        for (let y = 0; y < iAsString.length; y++) {
            result += Number(iAsString[y])
        }

        if (result == 5 || result == 7 || result == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }

    }
}
specialNums(20)