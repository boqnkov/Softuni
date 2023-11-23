function reverse(n, array) {
    
    let newArr = [];

    for (let i = 0; i < n; i++) {

        newArr[i] = array[i]
    }
    
    let result = [];
    
    for (let i = newArr.length-1; i>=0; i--){
        result[result.length] = newArr[i]
    }
  
    console.log(result.join(' '));


}
reverse(3, [10, 20, 30, 40, 50])