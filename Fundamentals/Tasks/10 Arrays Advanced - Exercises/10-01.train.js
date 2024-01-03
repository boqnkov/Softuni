function train(arr) {
    let wagons = arr.shift().split(' ').map(Number)
    let capacity = Number(arr.shift())

    for (let i = 0; i<arr.length; i++){
        let token = arr[i];
        let tokenAsArr = token.split(' ')
        
        if (tokenAsArr[0] == 'Add'){
            wagons.push(tokenAsArr[1])
        } else {
            for (let j=0; j<wagons.length; j++){
                let curWagon = wagons[j]
                if (curWagon+Number(tokenAsArr[0])<=capacity){
                    wagons[j]+=Number(tokenAsArr[0])
                    break
                }
            }
        }
    }
    console.log(wagons.join(' '));


}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)