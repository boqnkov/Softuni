function touristShop(input) {
    let budget = Number(input[0]);
    let i = 1
    let command = input[i];

    let productCounter = 0
    let productPrice = 0

    let eqValue = 0
    let currentMoney = budget


    while (command !== 'Stop') {
        let productName = command
        i++

        productCounter++

        productPrice = Number(input[i])
        i++

        if (productPrice > currentMoney) {
            let diff = productPrice - currentMoney
            console.log(`no money`);
            console.log(diff);
            break;
        }

        if (productCounter % 3 === 0) {
            productPrice *= 0.5
        }

        eqValue += productPrice
        currentMoney -= productPrice


        command = input[i]
    }
    if (command === 'Stop') {
        console.log(` ${productCounter}   ${eqValue}`);
    }
}
touristShop([
    '153.20',
    'Backpack',
    '25.20',
    'Shoes',
    '54',
    'Sunglases',
    '30',
    'Stop'])