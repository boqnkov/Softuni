function pascalCase(input) {

    let result = [];
    let word = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i]
        if (char == char.toUpperCase()) {
            if (i != 0) {

                result.push(word);
            }
            word = char;
        } else {
            word += char;
        }
    }
    result.push(word)
    console.log(result.join(', '));
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')