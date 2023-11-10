function combinations(input) {

    let x1 = 0;
    let x2 = 0;
    let x3 = 0;
    let n = Number(input[0]);
    let combinationCounter = 0
    for (x1 = 0; x1 <= n; x1++) {
        
        for (x2 = 0; x2 <= n; x2++) {
           
            for (x3 = 0; x3 <= n; x3++) {
                if (x1+x2+x3 === n){
                    combinationCounter++
                }
            }
        }

    }
    console.log(combinationCounter);
}
combinations(['25'])