function cake(input) {
   
    let width = Number(input[0]);
    let length = Number(input[1]);
    let squareCake = width*length;
    let piecesTaken = 0

    let command = input[2];
    let i = 3
    
    while(command !== 'STOP'){
        let currentPiecesTaken = Number(command)
        piecesTaken += currentPiecesTaken;
        let diff = Math.abs(piecesTaken - squareCake);
        
        if (piecesTaken>squareCake){
           
           console.log(`No more cake left! You need ${diff} pieces more.`); 
           break;
        }
        
        command = input[i];
        i++
    }
    
    if (command === 'STOP') {
        let diff = Math.abs(piecesTaken - squareCake);
        console.log(`${diff} pieces are left.`);
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

