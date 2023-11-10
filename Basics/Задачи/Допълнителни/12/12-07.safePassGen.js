function safePassGen(input) {
    
    let a=Number(input[0]);
    let b=Number(input[1]);
    let maxPasses = Number(input[2])

    let counter = 0
    let text = ``
    let print = ''

    let x = 0
    let y = 0
    
    for (let ANum=35; ANum<=55; ANum++){
        
        if ((x>a) || (y>b)){
            break
        }
        
        if (counter > maxPasses){
            break
        }
        
       

        
        for (let BNum = 64; BNum<=96;BNum++){
           
            if ((x>a) || (y>b)){
                break
            }
            
            if (counter > maxPasses){
                break
            }

            

            for (x = 1; x<=a; x++) {
               
                if (counter > maxPasses){
                    break
                }
                
                for (y = 1; y<=b; y++){
                    
                    
                    counter++
                    if (counter > maxPasses){
                        break
                    }
    
                    text = `${String.fromCharCode(ANum)}${String.fromCharCode(BNum)}${x}${y}${String.fromCharCode(BNum)}${String.fromCharCode(ANum)}|`
                    
                    print+=text
            
                    ANum++
                    BNum++
                    if (ANum>55){
                        ANum = 35
                    }
                    if (BNum>96){
                        BNum = 64
                    }
                }
            }
        }   
    }
console.log(print);
}
safePassGen(['20',
    '3',
    '50'
    ])