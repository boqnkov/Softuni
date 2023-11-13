function pin(input) {

    let max1 = Number(input[0]);
    let max2 = Number(input[1]);
    let max3 = Number(input[2]);

    let max11 = max1;
    let max22 = max2;
    let max33 = max3;


    if (max1 === 1) {

        max11 = 2;

    }

    if (max2 === 1) {

        max22 = 2;

    }

    if (max3 === 1) {

        max33 = 2;

    }

    let prime = true;

    for (let i = 0; i <= max11; i += 2) {

        let d1 = i;

        if ((d1 % 2 === 0) && d1 !== 0) {

            for (let b = 2; b <= max22; b++) {

                let d2 = b;

                for (let d = 2; d < d2; d++) {

                    prime = true;

                    if (d2 % d === 0) {

                        prime = false;

                        break;

                    }
                }

                if (prime === true) {

                    for (let c = 0; c <= max33; c += 2) {

                        let d3 = c;

                        if ((d3 % 2 === 0) && d3 !== 0) {

                            console.log(`${d1} ${d2} ${d3}`);

                        }

                    }

                }

            }

        }

    }






}
pin(["1", "1", "1"]);
