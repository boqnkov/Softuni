function condense(input) {


    while (input.length != 1) {
        let condensed = []
        for (let i = 0; i < input.length - 1; i++) {
            condensed[i] = input[i] + input[i + 1]

        }
        input = condensed
    }


    console.log(input[0]);
}
condense([5, 0, 4, 1, 2])