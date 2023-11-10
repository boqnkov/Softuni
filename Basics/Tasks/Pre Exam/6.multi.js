function multi(input) {
   
    let numberAsStr = String(input[0])

    let firstNum = Number(numberAsStr[0]);
    let secondNum = Number(numberAsStr[1]);
    let thirdNum = Number(numberAsStr[2]);


    let result1 = 0;
    let result2 = 0;
    let result3 = 0;



    for (let i = 1; i <= thirdNum; i++) {

        
            result1 = i;
       

        for (let y = 1; y <= secondNum; y++) {
           
                result2 = y;
           

            for (let z = 1; z <= firstNum; z++) {
                
                    result3 = z;
                    final = result1*result2*result3
                   
                    console.log(`${result1} * ${result2} * ${result3} = ${final};`);
                
                }
            }
        }
    }


multi(['324'])