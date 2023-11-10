function space(input) {

    let shipWidth= Number(input[0]);
    let shipLength = Number(input[1]);
    let shipHeight = Number(input[2]);
    let avgHeight = Number(input[3]);

    let roomNeeded = 2*2*(avgHeight+0.40)
    let totalRoom = shipWidth * shipLength * shipHeight

    if (totalRoom / roomNeeded > 10){
        console.log(`The spacecraft is too big.`);
    } else if (totalRoom / roomNeeded >=3) {
        console.log(`The spacecraft holds ${Math.floor(totalRoom / roomNeeded)} astronauts.`);
    } else {
        console.log(`The spacecraft is too small.`);
    }




}
space(['3.5',
    '4',
    '5',
    '1.70'
    ])