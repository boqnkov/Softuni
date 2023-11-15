function lowerOrUp(letter) {
    
    let char = letter.charCodeAt(0)
    if (char>96){
        console.log(`lower-case`);
    } else {
        console.log(`upper-case`);
    }

}
lowerOrUp('l')