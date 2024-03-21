function emailExtract(input){
let pattern = /\b[^\.\-_]\w*[-\._]*\w*[^\.\-_]@[A-Za-z\-]+\.[A-Za-z\-]*\.?[A-Za-z]*\b/gm

let match = input.match(pattern)
match.forEach(match => console.log(match))
}
emailExtract('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')