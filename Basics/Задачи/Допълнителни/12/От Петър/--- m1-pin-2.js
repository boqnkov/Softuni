function pin(input) {

    let max1 = Number(input[0]);
    let max2 = Number(input[1]);
    let max3 = Number(input[2]);

    
    let prime = true;
    
    for (let i = 1; i <= max1; i ++) {
        
        let d1 = i;
    
        if (d1 % 2 === 0) {
    
            for (let b = 1; b <= max2; b++) {
    
                let d2 = b;

                if (d2 >= 2 && d2 <= 7) {

                    for (let d = 2; d <= d2; d++) {
                                        // <=, not <
                        prime = true;
            
                        if (d2 % d === 0 && d !== d2) {
                                    
                            prime = false;
            
                            break;
            
                        }
                    }
            
                    if (prime === true) {
            
                        for (let c = 1; c <= max3; c ++) {
            
                            let d3 = c;
    
                            if (d3 % 2 === 0) {
    
                                console.log(`${d1} ${d2} ${d3}`);
    
                            }
        
                            
                        }
                    
            
                    }


                }
                
            }
    
        }
        
    }
    
    
    
    
    
    
    }
    pin(["4", "6", "2"]);
    