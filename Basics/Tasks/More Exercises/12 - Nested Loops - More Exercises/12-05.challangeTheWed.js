function challangeTheWed(input) {

    let men = Number(input[0]);
    let ladies = Number(input[1]);
    let tables = Number(input[2]);

    let counter = 0
    let result = '';
    let print = '';

    for (let a1 = 1; a1 <= men; a1++) {
        for (let a2 = 1; a2 <= ladies; a2++) {

            counter++
            if (counter <= tables) {

                result = `(${a1} <-> ${a2}) `
                print += result
            }
        }
    }
    console.log(print);

}
challangeTheWed(['5', '8', '40'])