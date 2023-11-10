function pinCodes(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);


    let result1 = '';
    let result2 = '';
    let result3 = '';



    for (let i = 1; i <= firstNum; i++) {

        if (i % 2 === 0) {
            result1 = i;
        } else {
            continue;
        }

        for (let y = 2; y <= secondNum; y++) {
           
            if (y === 2 || y === 3 || y === 5 || y === 7) {
                result2 = y;
            } else {
                continue;
            }

            for (let z = 1; z <= thirdNum; z++) {
                
                if (z % 2 === 0) {
                    result3 = z;
                    console.log(`${result1} ${result2} ${result3}`);
                } else {
                    continue;
                }
            }
        }
    }
}
pinCodes(['3', '5', '5'])
