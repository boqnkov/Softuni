function reverseInPlace(input) {

    for(let i = 0; i<input.length/2; i++){
        
        let temp = input[i]
        input[i] = input[input.length-1-i]
        input[input.length-1-i] = temp

    }

    console.log(input.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'] )