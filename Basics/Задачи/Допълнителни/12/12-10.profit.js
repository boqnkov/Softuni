function profit(input) {
    
    let coins1 = Number(input[0]);
    let coins2 = Number(input[1]);
    let coins5 = Number(input[2]);
    let sum = Number(input[3]);

    for (let x=0; x<=coins1; x++) {
        let multi1 = x*1
        for (let y = 0; y<=coins2; y++){
            let multi2 = y*2
            for (let z = 0; z<=coins5; z++){
                let multi3 = z*5
                if (multi1 + multi2 + multi3 === sum){
                    console.log(`${x} * 1 lv. + ${y} * 2 lv. + ${z} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
profit(['3',
    '2',
    '3',
    '10'
    ])