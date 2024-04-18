function printArr(arr, deli) {

    let result = arr.join(`${deli}`)
    console.log(result);
}
printArr(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)