const arr = [5,8,7,3,5,9];

function reducer(acc, num) {
    console.log(acc, num);
    return acc + num
}

const result = arr.reduce(reducer,0);

console.log(result);