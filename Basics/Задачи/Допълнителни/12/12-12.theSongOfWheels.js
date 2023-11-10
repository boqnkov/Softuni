function songOfWheels(input) {
    let controlValue = Number(input[0]);
    let result = ``
    let final = ``
    let counter = 0
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d && (((a * b) + (c * d)) === controlValue)) {

                        counter++
                        result += `${a}${b}${c}${d} `
                        if (counter === 4) {
                            final = `${a}${b}${c}${d}`
                        }
                    }
                }
            }
        }
    }

    if (counter >= 4) {
        console.log(`${result}`);
        console.log(`Password: ${final}`);
    } else if (counter === 0) {
        console.log(`No!`);
    } else {
        console.log(`${result}`);
        console.log(`No!`);
    }

}
songOfWheels([55])