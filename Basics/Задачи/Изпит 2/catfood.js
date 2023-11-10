function catfood(input) {
 
    let catCount = Number(input[0]);
    let smallCats = 0
    let midCats = 0
    let largeCats = 0

    let totalNeededFood = 0

    for (let i = 1; i<=catCount; i++){

        let eatenFood = Number(input[i])
        if (eatenFood>=300){
            largeCats++
            totalNeededFood+=eatenFood
        } else if (eatenFood >=200) {
            midCats++
            totalNeededFood+=eatenFood
        } else {
            smallCats++
            totalNeededFood+=eatenFood
        }
    }

    let price = totalNeededFood/1000*12.45
console.log(`Group 1: ${smallCats} cats.`);
console.log(`Group 2: ${midCats} cats.`);
console.log(`Group 3: ${largeCats} cats.`);
console.log(`Price for food per day: ${price.toFixed(2)} lv.`);
}
catfood(['6',
    '102',
    '236',
    '123',
    '399',
    '342',
    '222',
    ])