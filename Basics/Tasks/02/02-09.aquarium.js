function aquarium(input) {

let length = Number(input[0])*0.1;
let width = Number(input[1])*0.1;
let height = Number(input[2])*0.1;
let percent = Number(input[3]);

let finalLiters = (length*width*height) - (length*width*height*percent/100);

console.log(finalLiters);





}

aquarium(["85","75","47","17"]);