function signCheck(numOne, numTwo, numThree) {
    
    let negativeCounter = 0
    let combination = [numOne, numTwo, numThree]
    
    for (let curNum of combination) {
        if (curNum<0){
            negativeCounter++
        }
    }
    (negativeCounter==1|| negativeCounter==3) ? console.log('Negative'): console.log('Positive');;
}

signCheck(5,
    12,
   -15
   )