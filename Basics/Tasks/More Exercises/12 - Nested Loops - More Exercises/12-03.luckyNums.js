function luckyNums(input) {

    let n = Number(input[0]);
    let luckyNum = ''
    let print = ''
    for (let n1 = 1; n1 <= 9; n1++) {
        for (let n2 = 1; n2 <= 9; n2++) {
            for (let n3 = 1; n3 <= 9; n3++) {
                for (let n4 = 1; n4 <= 9; n4++) {

                    if (((n1 + n2) === (n3 + n4)) && ((n % (n1 + n2)) === 0)) {

                        luckyNum = String(n1) + String(n2) + String(n3) + String(n4) + ' '
                        print += luckyNum

                    }
                }
            }
        }
    }
    console.log(print);
}
luckyNums([7])