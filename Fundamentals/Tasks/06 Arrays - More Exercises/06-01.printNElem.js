function printNElem(arr) {
    let nStep = Number(arr[arr.length-1]);
    let newArr = []
    for (let i=0; i<arr.length-1; i+=nStep){
        newArr.push(arr[i])
    }
    console.log(newArr.join(' '));
}
printNElem(['5', '20', '31', '4', '20', '2'])
printNElem(['dsa', 'asd', 'test', 'test', '2'] )
printNElem(['1', '2', '3', '4', '5', '6'] )