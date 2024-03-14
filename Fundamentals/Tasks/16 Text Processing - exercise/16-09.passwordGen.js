function passwordGen(input) {

    let concatenated = input[0] + input[1];

    let word = input[2];

    let vowels = ['a', 'e', 'o', 'u', 'i'];
    let idx = 0;
    
    for (let letter of concatenated) {

        if (vowels.includes(letter)) {
            concatenated = concatenated.replace(letter, word[idx].toUpperCase())
            idx++
            if (idx == word.length) {
                idx = 0
            }
        }
    }
    let reversed = concatenated.split('').reverse().join('')

    console.log(`Your generated password is ${reversed}`);


}
passwordGen([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)