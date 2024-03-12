function stringSubstring(wordInput, textInput) {
    let word = wordInput.toLowerCase()
    let text = textInput.toLowerCase();

    let arr = text.split(' ');

    for (let curWord of arr){
        if (curWord == word){
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javascript',
'JavaScript is the best programming language'
)