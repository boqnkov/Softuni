function arrManipulations(input) {
    
    let arr = input
    .shift()
    .split(' ')
    
    let addNumAsStr = input[0];
    let addNum = Number(addNumAsStr[4])
    
    arr.push(addNum)

    let removeNumAsStr = input[1];
    let removeNum = removeNumAsStr[7]
    let indexOfRemove = arr.indexOf(removeNum);
    arr.splice(indexOfRemove,1)
    // let counter = 0
    // for (let curElem of arr){
        
    //     if (curElem == removeNum){
    //         arr.splice(counter,1)

    //     }
    //     counter++
    // }
    let removedElemAsStr = input[2];
    let removedEl = removedElemAsStr[9];
    arr.splice(removedEl,1);

    let insertedNumAsStr = input[3];
    let insertedNum = insertedNumAsStr[7];
    let insertedIndex = insertedNumAsStr[9];
    arr.splice(insertedIndex,0,insertedNum)
    arr.map(x => Number(x));
    



    console.log(arr.join(' '));
    
    
}
arrManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)