function sumAndProduct(input){
    
 
    let n = Number(input[0]);
    let proizv = 0;
    let sum = 0;
 
    let result = '';
 
    for (let a = 1; a <= 9; a++){
        for (let b = 9; b >= a; b--){
 
            for (let c = 0; c <= 9; c++){
                for (let d = 9; d >= c; d--){
                    sum = a+b+c+d;
                    proizv = a * b * c * d;
 
                    
                    if(sum === proizv && n % 10 === 5){
                        result = String(a)+String(b)+String(c)+String(d);
                       console.log(result); 
                       return;
                    }

                    if((proizv % sum) >= 3 && n % 3 ===0){
                        result = String(d)+String(c)+String(b)+String(a)
                        console.log(result); 
                        return;  
                    }
                
                }
            }
 
        }
 
 
    }
    
 
}
sumAndProduct(['123'])