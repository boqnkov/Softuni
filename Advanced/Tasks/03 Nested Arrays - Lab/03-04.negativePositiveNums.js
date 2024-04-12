function negativePosNums(arr) {
    let result = [];

    arr.forEach(element => {
        if (element < 0){
            result.unshift(element)
        } else {
            result.push(element)
        }
    });
    console.log(result.join('\n'));


}

negativePosNums([7, -2, 8, 9])