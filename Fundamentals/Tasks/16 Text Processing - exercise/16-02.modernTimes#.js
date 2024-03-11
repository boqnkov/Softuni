function modernTimes(string) {
    let arr = string.split(' ')
    for (let word of arr){
        if (word[0] == '#' && word.length > 1){
            let newWord = word.substring(1)
            let checker = true
            for (let i = 0; i < newWord.length; i++){
                if (!((newWord.charCodeAt(i) >= 65 && newWord.charCodeAt(i) <= 90) || (newWord.charCodeAt(i) >= 97 && newWord.charCodeAt(i) <= 122))){
                    checker = false
                }
            }
            if (checker){
                console.log(newWord);
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')