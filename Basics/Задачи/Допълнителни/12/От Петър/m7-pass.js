function pass(input) {

    let aa = Number(input[0]);
    let bb = Number(input[1]);
    let passMax = Number(input[2]);

    let string = "";
    let stringCount = 0;



    outer: for (let a = 35; a <= 55; a++) {

        let s1 = String.fromCharCode(a);

        for (let b = 64; b <= 96; b++) {

            let s2 = String.fromCharCode(b);

            for (let c = 1; c <= aa; c++) {

                let s3 = c;

                for (let d = 1; d <= bb; d++) {

                    let s4 = d;

                    for (let e = 64; e <= 96; e++) {

                        let s5 = String.fromCharCode(e);

                        for (let f = 35; f <= 55; f++) {

                            let s6 = String.fromCharCode(f);

                            let comb = s1 + s2 + s3 + s4 + s5 + s6 + "|";

                            string += comb;
                            stringCount++

                            if (stringCount > passMax) {

                                break outer;

                            }

                        }

                    }

                }

            }

        }

    }

    
    console.log(string);


}
pass(["2", "3", "10"]);
