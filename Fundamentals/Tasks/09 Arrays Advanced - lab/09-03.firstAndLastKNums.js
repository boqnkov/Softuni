function firstAndLastKNums(arr) {
    let k = arr.shift()
    let firstRes = arr.slice(0, k).join(' ')
    let secondRes = arr.slice(-k).join(' ')
    console.log(`${firstRes} \n${secondRes}`);
}
firstAndLastKNums([2,
    7, 8, 9]
)