function towns(input) {

    let result = {};

    for (let town of input) {
        let [townName, productName, productPrice] = town.split(' | ');
        productPrice = Number(productPrice);

        if (!(productName in result)) {
            result[productName] = { price: productPrice, town: townName }
        } else {
            if (result[productName]['price'] > productPrice){
                result[productName]['price'] = productPrice
                result[productName]['town'] = townName
            } 
        }
    }

    console.log(result);
    for (let product in result){
        console.log(`${product} -> ${result[product].price} (${result[product].town})`);
    }
}
towns(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)