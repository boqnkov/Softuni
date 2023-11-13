function pinCodes(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);

    let result1 = '';
    let result2 = '';
    let result3 = '';

    let isValid1 = true
    let isValid2 = true
    let isValid3 = true

    for (let i = 1; i <= firstNum; i++) {

        if (i % 2 === 0) {
            isValid1 = true
            result1 = String(i)

        } else {
            isValid1 = false
            continue
        }

        for (let y = 2; y <= secondNum; y++) {
            if (y === 2 || y === 3 || y === 5 || y === 7) {
                isValid2 = true
                result2 = String(y)

            } else {
                isValid2 = false
                continue
            }

            for (let z = 1; z <= thirdNum; z++) {
                if (z % 2 === 0) {
                    isValid3 = true
                    result3 = String(z)

                    if (isValid1 && isValid2 && isValid3) {
                        console.log(`${result1} ${result2} ${result3}`);
                    }

                } else {

                    isValid3 = false
                    continue
                }
            }
        }
    }
}
pinCodes(['3', '5', '5'])