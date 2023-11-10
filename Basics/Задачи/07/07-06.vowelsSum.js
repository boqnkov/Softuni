function vowelsSum(input) {

    let word = input[0];
    let sum = 0;

    for (let i=0; i<word.length; i++) {
    
    let symbol = word[i]
    if (symbol === 'a') {
        sum += 1;
    } else if (symbol === 'e') {
        sum +=2;
    } else if (symbol === 'i') {
        sum +=3;
    } else if (symbol === 'o') {
        sum +=4;
    } else if (symbol === 'u') {
        sum +=5
    }
    }
    console.log(sum);

}

vowelsSum(["beer"])