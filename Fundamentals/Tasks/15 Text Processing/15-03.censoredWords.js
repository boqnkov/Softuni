function censoredWords(sentence, word) {
    
    // let result = sentence.replaceAll(word,('*'.repeat(word.length)))
    // console.log(result);
    while (sentence.includes(word)){
        sentence = sentence.replace(word,('*'.repeat(word.length)))
    }
    console.log(sentence);
}
censoredWords('A small sentence with  some small words', 'small')