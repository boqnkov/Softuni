function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let priceStudio = 0;
    let priceApt = 0;

    switch (month) {
        case 'May':
        case 'October':
            if (nights > 7 && nights <= 14) {
                priceStudio = nights * 50 * 0.95;
                priceApt = nights * 65;
            } else if (nights > 14) {
                priceStudio = nights * 50 * 0.7;
                priceApt = nights * 65 * 0.9;
            } else {
                priceStudio = nights * 50;
                priceApt = nights * 65
            }
            break;

        case 'June':
        case 'September':
            if (nights > 14) {
                priceStudio = nights * 75.2 * 0.8;
                priceApt = nights * 68.7 * 0.9;
            } else {
                priceStudio = nights * 75.2
                priceApt = nights * 68.7
            }
            break;

        case 'July':
        case 'August':
            if (nights > 14) {
                priceStudio = nights * 76;
                priceApt = nights * 77 * 0.9;
            } else {
                priceStudio = nights * 76
                priceApt = nights * 77
            }
            break;
    }

    console.log(`Apartment: ${priceApt.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}
hotelRoom(["June",
    "14"])

