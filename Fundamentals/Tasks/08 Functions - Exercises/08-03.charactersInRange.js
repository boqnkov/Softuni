function charactersInRange(char1, char2) {
    
    let a = char1.charCodeAt(0);
    let b = char2.charCodeAt(0);
    let result = ''

    let minCode = Math.min(a,b)
    let maxCode = Math.max(a,b)
    
        for (let i = minCode+1; i < maxCode; i++) {
            result += String.fromCharCode(i) + ' '
        }
    

    console.log(result);
}
charactersInRange('#',
    ':'
)