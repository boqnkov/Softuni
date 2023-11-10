function prepareForExam(input) {

    let badGrades = Number(input[0]);
    let command = input[1];
    let i = 2;

    let goodgradesCounter = 0;
    let badGradesCounter = 0;
    let sumGrades = 0;
    let lastProblem = '';

    while (command !== 'Enough') {

        lastProblem = command;

        command = Number(input[i])
        i++

        if (command <= 4) {
            badGradesCounter++
            sumGrades += command
        } else {
            goodgradesCounter++
            sumGrades += command
        }

        if (badGradesCounter === badGrades) {
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            break;
        }

        command = input[i];
        i++

    }

    if (badGradesCounter < badGrades) {

        avgScore = sumGrades / (badGradesCounter + goodgradesCounter)
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${i / 2 - 1}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
prepareForExam(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
