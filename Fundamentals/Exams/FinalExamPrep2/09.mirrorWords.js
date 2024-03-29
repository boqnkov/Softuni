function mirrorWords(input) {

    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g

    let match = pattern.exec(input[0])
    let wordCounter = 0
    let mirrorWords = []

    while (match) {
        wordCounter++
        let reversedWord2 = match.groups.word2.split('').reverse().join('')
        if (match.groups.word1 === reversedWord2) {
            mirrorWords.push(`${match.groups.word1} <=> ${match.groups.word2}`)
        }
        match = pattern.exec(input[0])
    }

    if (wordCounter > 0) {
        console.log(`${wordCounter} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }
    if (mirrorWords.length != 0) {
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(', '));
    } else {
        console.log(`No mirror words!`);
    }

}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])