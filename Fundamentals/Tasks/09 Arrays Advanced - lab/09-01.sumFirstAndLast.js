function sumFisrsAndLast(arr) {
    let firstElem = Number(arr.shift());
    let lastElem = Number(arr.pop());

    let sum = firstElem+lastElem
    console.log(sum);
}
sumFisrsAndLast(['20', '30', '40'])