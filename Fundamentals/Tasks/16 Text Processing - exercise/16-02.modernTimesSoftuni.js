function modernTimes(string) {
    let array = string.split(' ');
    let filteredArr = array.filter(word => word.startsWith('#') && word.length >1)
    
    for (let word of filteredArr){
        let specialWord = word.slice(1)
        let pattern = /\b[A-za-z]+\b/;
        if (pattern.test(specialWord)){

            console.log(specialWord);
        }
    }
    

}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')