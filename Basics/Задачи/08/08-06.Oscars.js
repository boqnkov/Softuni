function oscars(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let evaluatives = Number(input[2]);

    let points = academyPoints;
    let evaluativeName = ''
    for (let i = 3; i < input.length; i++) {

        if (i % 2 !== 0) {
            evaluativeName = input[i]
            points = points + (evaluativeName.length) * Number(input[i + 1]) / 2;
        }

        if (points > 1250.5) {

            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }

    }
    let diff = 1250.5 - points;
    if (points < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }

}
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])

