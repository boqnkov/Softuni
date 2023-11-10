function everest(input) {
  
    let camp = 5364;
    let everest = 8848;
    let i = 0;
    let command = input[i]
    i++
    let daysCounter = 1;
    let totalHeight = camp
    while (command !== 'END'){
       
        

        if (command === 'Yes' && daysCounter < 5){
            command = input[i]
            i++
            daysCounter++
            totalHeight+=Number(command)
           
        } else if (command === 'No' && daysCounter <= 5){
            command = input[i]
            i++
            totalHeight+=Number(command)
            
        } else {
            break;
        }
        command = input[i]
        i++

        if (totalHeight >= everest) {
            console.log(`Goal reached for ${daysCounter} days!`);
            return;
        } else if (daysCounter > 5 || command === undefined) {
            console.log(`Failed!`);
            console.log(totalHeight);
            return;
        }
        
        
    }
    
    console.log(`Failed!`);
    console.log(totalHeight);
    
}
everest(['No',
    '1254',
    'Yes',
    '1402',
    'No',
    '250',
    'Yes',
    '635'
    
    ])