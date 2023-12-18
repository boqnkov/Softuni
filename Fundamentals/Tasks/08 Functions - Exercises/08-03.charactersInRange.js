function charactersInRange(char1, char2) {
    
    let a = char1.charCodeAt(0);
    let b = char2.charCodeAt(0);
    let result = ''

    if (a > b) {
        for (let i = b+1; i < a; i++) {
            result += String.fromCharCode(i) + ' '
        }
    } else if (b > a) {
        for (let i = a+1; i < b; i++) {
            result += String.fromCharCode(i) + ' '
        }
    } else {
        result = String.fromCharCode(i)
    }

    console.log(result);
}
charactersInRange('#',
    ':'
)