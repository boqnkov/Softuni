function emailExtract(input){
let pattern = /( |^)([A-Za-z0-9]+[\w\.\-]*)@([A-za-z]+\-?[A-Za-z]+)(\.[A-Za-z]+\-?[A-Za-z]){1,2}/g

let match = input.match(pattern)
match.forEach(match => console.log(match))
}
emailExtract('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')