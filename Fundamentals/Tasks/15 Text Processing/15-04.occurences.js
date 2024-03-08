function occurences(text, searchedWord) {
    let counter = 0
    while(text.includes(searchedWord)){
        counter++
        text = text.replace(searchedWord, '*')
    }
    console.log(counter);
}
occurences('softuni is great place for learning new programming languages',
'softuni'
)