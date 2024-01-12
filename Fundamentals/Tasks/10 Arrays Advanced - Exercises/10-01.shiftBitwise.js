function solve(number) {
    
    let shiftedNum = number >> 1

    let lsb = shiftedNum & 1

    console.log(lsb);

}
solve(51)