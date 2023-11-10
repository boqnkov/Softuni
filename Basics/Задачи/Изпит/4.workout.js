function workout(input) {

    let workoutdays = Number(input[0]);
    let kmFirstDay = Number(input[1]);
    let kmCurrentDay = kmFirstDay
    let totalkm = kmFirstDay

    for (let i = 2; i <= workoutdays + 1; i++) {
        
        kmCurrentDay = kmCurrentDay + kmCurrentDay * Number(input[i]) / 100

        totalkm = totalkm + kmCurrentDay
    }
    let diff = totalkm - 1000;

    if (totalkm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(Math.abs(diff))} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(Math.abs(diff))} more kilometers`);
    }

}
workout(['5',
    '30',
    '10',
    '15',
    '20',
    '5',
    '12'
])