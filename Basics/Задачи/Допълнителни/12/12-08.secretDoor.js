function secretDoor(input) {


    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);


    for (let x = 2; x <= n1; x += 2) {

        for (let y = 2; y <= n2; y++) {
            let isValid = true
            if (y <= 7) {
                for (let p = 2; p <= y; p++) {
                    if (y % p === 0 && p !== y) {
                        isValid = false
                    }
  
                }

                if (isValid) {

                    for (let z = 2; z <= n3; z += 2) {
                        console.log(String(x) + ' ' + String(y) + ' ' + String(z));
                    }
                }
            }
        }
    }
}
secretDoor(['3',
    '5',
    '5'
])