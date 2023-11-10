function lunchBreak(input) {

    let nameMovie = (input[0]);
    let durationMovie = Number(input[1]);
    let restTime = Number(input[2]);

    let lunhcTime = (1 / 8) * restTime;
    let breakTime = (1 / 4) * restTime;
    let timeLeft = (restTime - (breakTime + lunhcTime));
    let diff = Math.abs(timeLeft - durationMovie);
    let diffFinal = Math.ceil(diff);


    if (timeLeft >= durationMovie) {

        console.log(`You have enough time to watch ${nameMovie} and left with ${diffFinal} minutes free time.`);
    } else {

        console.log(`You don't have enough time to watch ${nameMovie}, you need ${diffFinal} more minutes.`);
    }


}
lunchBreak(["Teen Wolf",
    "48",
    "60"]);

