function firstAndLastKNums(arr) {
    let k = arr.shift()
    let firstRes=arr.slice(0,k).join(' ')
    let secondRes=arr.slice((arr.length-k),(arr.length)).join(' ')
    console.log(`${firstRes} \n${secondRes}`);
}
firstAndLastKNums([2, 
    7, 8, 9]
    )