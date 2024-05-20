function storeCatalogue(input) {
    
    let result = [];

    for (let line of input){
        let [product, price] = line.split(' : ')
        price = Number(price)
        result.push({product, price})
    }

    let sorted = result.sort((a,b) => a.product.localeCompare(b.product))

    let symbol = '';

    for (let line of sorted){
        if (symbol !== line.product[0]){
            console.log(line.product[0]);
            symbol = line.product[0]
        } 

        console.log(`  ${line.product}: ${line.price}`);
    }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)