function pyramidOfNums(input) {

    let n = Number(input[0]);
    let currentNum = 1;
    let curRow = '';
    let isBigger = false;

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {

            if (currentNum > n) {
                isBigger = true;
                break;
            }
            curRow += currentNum + ' ';
            currentNum++
        }
        console.log(curRow);
        curRow = '';
        if (isBigger) {
            break;
        }
    }

}
pyramidOfNums(["7"])