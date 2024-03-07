function schoolGrades(arr) {

    let studentGrades = {};

    for (let studentInfo of arr) {
        let studentInfoArr = studentInfo.split(' ')
        let name = studentInfoArr.shift()
        if (!(name in studentGrades)) {
            studentGrades[name] = studentInfoArr;
        } else {
            studentGrades[name].push(...studentInfoArr)
        }
    }

    let entries = Object.entries(studentGrades).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [student, grades] of entries) {
        let sumOfGrades = 0
        for (let curGrade of grades) {
            sumOfGrades += Number(curGrade)
        }

        let avgGrade = sumOfGrades / grades.length
        console.log(`${student}: ${avgGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)