function replace(input) {
    let result = input[0];
    for (let i=1; i<input.length; i++) {
        if (input[i] !== result[result.length-1]){
            result+= input[i]
        }
    }
    console.log(result);
}
replace('aaaaabbbbbcdddeeeedssaa')