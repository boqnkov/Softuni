function heartDelivery(arr) {

    let neighborhood = arr.shift().split('@').map(Number);
    let command = arr.shift().split(' ')
    let curIndex = 0
   
    while (command[0] != 'Love!') {
        
        let indexJump = Number(command[1]);
       
        curIndex += indexJump

        if (curIndex>= neighborhood.length){
            curIndex = 0
        }
        
        if (neighborhood[curIndex] == 0) {
            console.log(`Place ${curIndex} already had Valentine's day.`);
            command = arr.shift().split(' ');
            continue
        
        } else {
            neighborhood[curIndex] -= 2
        }
        
        if (neighborhood[curIndex] == 0) {
            console.log(`Place ${curIndex} has Valentine's day.`);
        }
        command = arr.shift().split(' ')
    }

    console.log(`Cupid's last position was ${curIndex}.`);
    
    let filtered = neighborhood.filter(a => a != 0);
    
    if (filtered.length == 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${filtered.length} places.`);
    }

}
// heartDelivery(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"])

    // heartDelivery(["2@4@2",
    // "Jump 2",
    // "Jump 2",
    // "Jump 8",
    // "Jump 3",
    // "Jump 1",
    // "Love!"])

    heartDelivery((["4@2@4@2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 2",
    "Jump 2",
    "Love!"])
    )
    
