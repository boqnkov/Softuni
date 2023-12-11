function formatGrade(grade) {
    
    if (grade<3){
        console.log(`Fail 2`);
    } else if (grade<3.5){
        console.log(`Poor ${grade.toFixed(2)}`)
    } else if (grade<4.5){
        console.log(`Good ${grade.toFixed(2)}`)
    } else if (grade<5.5){
        console.log(`Very Good ${grade.toFixed(2)}`)
    } else {
        console.log(`Excellent ${grade.toFixed(2)}`)
    }

}
formatGrade(2.99);
formatGrade(3)
formatGrade(3.5)
formatGrade(4.5)
formatGrade(5.5)
