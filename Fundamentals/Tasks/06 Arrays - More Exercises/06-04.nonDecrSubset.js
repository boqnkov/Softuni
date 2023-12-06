function nonDecrSubset(arr) {
    
    let newArr = [arr[0]]

    for (let i=1; i<arr.length; i++){
        if (arr[i]>= arr[i-1]){
            newArr.push(arr[i])
        }  
    }
   
    console.log(newArr);

}
nonDecrSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])

