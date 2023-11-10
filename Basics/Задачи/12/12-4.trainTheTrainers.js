function trainTheTrainers(input) {
    
    let trainersCount = Number(input[0]);
    let command = input[1];
    let index = 2
    let avgGrade = 0;
    let presentationCount=0;
    let sumAllGrades = 0;

    while (command!=='Finish'){
        let presentationName = command
        presentationCount+=1
        let sumGrades=0
        let avgGradeCurPres=0;
        for (let i = 1; i<=trainersCount; i++){
            curGrade=Number(input[index])
            index++
            sumGrades+=curGrade
        }
        avgGradeCurPres = sumGrades/trainersCount
        sumAllGrades+=avgGradeCurPres
        console.log(`${presentationName} - ${avgGradeCurPres.toFixed(2)}.`);
        command = input[index];
        index++

    }
    avgGrade = sumAllGrades/presentationCount

    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);


}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


