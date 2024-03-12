function hardWords(array) {
    let text = array.shift();
    let words = array.shift();

    let textArr = [];

    let regWord = '';
    let specialWord = '';
    for (let i = 0; i < text.length; i++) {

        let char = text[i]
        let prevChar = text[i - 1]
        let nextChar = text[i+1]
        if (char == '_') {
            if (prevChar != char) {
                textArr.push(regWord)
                regWord = ''
                specialWord += char
            } else {

                specialWord += char
            }

        } else if (char != '_') {
            if (prevChar == '_') {
                textArr.push(specialWord)
                specialWord = ''
                regWord += char
            } else {
                regWord += char
            }   
        } 
        if (nextChar == undefined && char == '_'){
            textArr.push(specialWord)
        } else if (nextChar == undefined && char !== '_'){
            textArr.push(regWord)
        }
    }

    for (let element of textArr){
        for (let word of words){
            if (element.includes('_') && element.length == word.length){
                let index = textArr.indexOf(element);
                textArr[index] = word
            }
        }
    }
    let result = textArr.join('');
    console.log(result);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)