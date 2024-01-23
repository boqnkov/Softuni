function storeProvision(arr1,arr2) {
    
    let products= {};


    for (let i=0; i<arr1.length; i+=2){
        let curProduct = arr1[i];
        let qty = Number(arr1[i+1]);

        products[curProduct] = qty
        
    }
   
   
    for (i=0; i<arr2.length; i+=2){
        let curProduct = arr2[i];
        let qty = Number(arr2[i+1]);

        if (curProduct in products){
            products[curProduct] += qty;

        } else {
            products[curProduct] = qty
        }
    }

    let entries = Object.entries(products);

    for (let entry of entries){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
 
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )