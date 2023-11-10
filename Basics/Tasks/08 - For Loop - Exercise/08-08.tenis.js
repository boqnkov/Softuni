function tennis(input) {

    let tournirsCount = Number(input[0]);
    let points = Number(input[1]);
    let winGames = 0;

    for (i = 2; i <= input.length; i++) {
        let result = input[i];

        switch (result) {
            case 'W': points += 2000; winGames += 1; break;
            case 'F': points += 1200; break;
            case 'SF': points += 720; break;
        }
    }

    let avgPoints = (points - (Number(input[1]))) / tournirsCount;
    let percentWinGames = winGames / tournirsCount * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${percentWinGames.toFixed(2)}%`);

}
tennis(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
