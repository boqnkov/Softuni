function graduation(input) {
  
    
    let name = input[0];
    let currentGrade = Number(input[1]);
    let excluded = 0;
    let sumGrades = 0;
    let classes = 0;
    let i = 1;

    while (i<input.length) {
        
        if (currentGrade<4) {
            excluded+=1
        }
        if (excluded === 2){
            console.log(`${name} has been excluded at ${i-1} grade`);
            break;
        }

        sumGrades+=currentGrade;
        classes+=1

        i++
        currentGrade= Number(input[i])


    }
    let avgGrade = sumGrades/classes

    if (excluded<2){
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
   
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

