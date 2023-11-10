function cornerShop(input) {
    let drink = input[0];
    let town = input[1];
    let qty = Number(input[2]);
    let price = 0;
    switch (town) {
        case 'Sofia':
            if (drink == 'coffee') {
                price = qty * 0.5;
                console.log(price);

            } else if (drink == 'water') {
                price = qty * 0.8;
                console.log(price);

            } else if (drink == 'beer') {
                price = qty * 1.2;
                console.log(price);

            } else if (drink == 'sweets') {
                price = qty * 1.45;
                console.log(price);

            } else if (drink == 'peanuts') {
                price = qty * 1.6;
                console.log(price);
            }
            break;

        case 'Plovdiv':
            if (drink == 'coffee') {
                price = qty * 0.4;
                console.log(price);

            } else if (drink == 'water') {
                price = qty * 0.7;
                console.log(price);

            } else if (drink == 'beer') {
                price = qty * 1.15;
                console.log(price);

            } else if (drink == 'sweets') {
                price = qty * 1.30;
                console.log(price);

            } else if (drink == 'peanuts') {
                price = qty * 1.5;
                console.log(price);
            }
            break;

        case 'Varna':
            if (drink == 'coffee') {
                price = qty * 0.45;
                console.log(price);

            } else if (drink == 'water') {
                price = qty * 0.7;
                console.log(price);

            } else if (drink == 'beer') {
                price = qty * 1.1;
                console.log(price);

            } else if (drink == 'sweets') {
                price = qty * 1.35;
                console.log(price);

            } else if (drink == 'peanuts') {
                price = qty * 1.55;
                console.log(price);
            }
            break;

    }

}
cornerShop
    (["sweets",
        "Sofia",
        "2.23"])




