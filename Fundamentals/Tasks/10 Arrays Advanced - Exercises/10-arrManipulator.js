function manipulator(nums,commands) {
    
    for (let command of commands){
        let tokens = command.split(' ')
        let action = tokens[0]
        if (action == 'add'){
            let idx = Number(tokens[1]);
            let num = Number(tokens[2]);
            nums.splice(idx,0,num);

        } else if (action == 'addMany') {
            let idx = Number(tokens[1]);
            let numsToAdd = tokens.slice(2,)
            for (let num of numsToAdd){
                nums.splice(idx,0,Number(num));
                idx++
            }
        } else if (action == 'contains'){
            let num = Number(tokens[1])
            let containsResult = nums.indexOf(num)
            console.log(containsResult);
        } else if (action == 'remove'){
            let idx = Number(tokens[1])
            nums.splice(idx,1)
        } else if (action == 'shift'){
            let positions = Number(tokens[1]);
            for (let i = 0; i<positions; i++){
                let takenNum = nums.shift();
                nums.push(takenNum)
            }
        } else if (action == 'sumPairs'){
            let newArr=[]
            for (i=0; i<nums.length/2; i+=2){
                let pushedNum = nums[i]+nums[i+1]
                newArr.push(pushedNum)
            }
            nums = newArr
        } else if (action == 'print'){
        console.log(nums);
        }
    
    }

}
// manipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
//     )

    manipulator([1, 2, 3, 4, 5],
        ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
        )