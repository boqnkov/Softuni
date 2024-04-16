function biggestEl(input) {
    let bigArr = [];
    for (let arr of input){
        bigArr.push(...arr)
    }
    console.log(bigArr);
}
biggestEl([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )