function moving(input) {
   
    let freeSpaceWidth = Number(input[0]);
    let freeSpaceLength = Number(input[1]);
    let freeSpaceHeight = Number(input[2]);
    let freeSpace = freeSpaceHeight*freeSpaceLength*freeSpaceWidth;

    let command = input[3];
    let i = 4;

    while (command !== 'Done'){
        let currentPiece = Number(command);
        freeSpace-=currentPiece;
        if (freeSpace<0){
            let diff = Math.abs(freeSpace);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        } 

        command=input[i];
        i++

    }
    if (command === 'Done') {
        console.log(`${freeSpace} Cubic meters left.`);

    }




}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


