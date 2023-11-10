function sum(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;


    for (let x = firstNum; x <= secondNum; x++) {
        for (let y = firstNum; y <= secondNum; y++) {
            counter++
            if ((x + y) === magicNum) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`);
                return
            }
        }

    }
    console.log(`${counter} combinations - neither equals ${magicNum}`);


}
sum(['23',
    '24',
    '20'
])