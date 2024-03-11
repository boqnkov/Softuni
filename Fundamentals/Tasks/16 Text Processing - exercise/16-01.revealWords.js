function revealWords(string, template) {
    let arrayWords = string.split(', ')
    let arrayTemplate = template.split(' ')
    
    for (let word1 of arrayWords){
        for (let word2 of arrayTemplate){
            if (word1.length == word2.length && word2.includes('*')){
                let index = arrayTemplate.indexOf(word2)
                arrayTemplate.splice(index, 1, word1)
            }
        }
    }
    let result = arrayTemplate.join(' ')
    console.log(result);
}
// revealWords('great',
// 'softuni is ***** place for learning new programming languages'
// )

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)