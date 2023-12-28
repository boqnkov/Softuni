function listOfProducts(arr){
    
    let sorteredArr = arr.sort();
    let result = []
   
    for (let i=0; i<arr.length; i++){
        result[i] = (i+1) + '.' + sorteredArr[i];
        console.log(result[i]);
    }
    
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])