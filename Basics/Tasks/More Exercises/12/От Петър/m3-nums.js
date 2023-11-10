function nums(input) {

    let num = Number(input[0]);

    let string = "";


    for (let a = 1; a <= 9; a++) {

        let d1 = String(a);

        for (let b = 1; b <= 9; b++) {

            let d2 = String(b);

            for (let c = 1; c <= 9; c++) {

                let d3 = String(c);

                for (let d = 1; d <= 9; d++) {

                    let d4 = String(d);

                    let comb = d1 + d2 + d3 + d4;

                    if ((Number(d1) + Number(d2) === Number(d3) + Number(d4)) && num % (Number(d1) + Number(d2)) === 0) {

                        string += comb + " ";



                    }

                }

            }
            
        }

    }


    console.log(string);

}
nums(["3"]);
