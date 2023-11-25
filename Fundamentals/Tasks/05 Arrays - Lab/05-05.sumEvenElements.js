function sumEvenNums(input) {

    let result = 0
    for(let curElement of input){
        if (curElement % 2 ==0){
            result+=Number(curElement)
        }
    }
    console.log(result);
}
sumEvenNums(['1','2','3','4','5','6'] )