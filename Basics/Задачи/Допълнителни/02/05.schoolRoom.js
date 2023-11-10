function schoolRoom(input) {
let w =Number(input[0]);
let h =Number(input[1]);


let realW= Math.floor(w/1.2);
let realH = Math.floor((h-1)/0.7);

let places = (realH*realW)-3;

console.log(places);


}
schoolRoom(["8.4","5.2"]);