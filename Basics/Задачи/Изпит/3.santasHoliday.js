function santasHoliday(input) {
    
    let daysStaying = (Number(input[0]) - 1);
    let roomType = input[1];
    let feedback = input[2];

    let roomForOnePerson = 18;
    let apt = 25;
    let presidentApt = 35;

    let pricePerNight = 0

    switch (roomType) {
        case 'room for one person' :
            if (daysStaying > 15) {
                pricePerNight = 18
            } else if (daysStaying>=10) {
                pricePerNight=18
            } else {
                pricePerNight = 18
            }
        break; 
    
        case 'apartment' :
            if (daysStaying > 15) {
                pricePerNight = 0.5*25
            } else if (daysStaying>=10) {
                pricePerNight=0.65*25
            } else {
                pricePerNight = 0.7*25
            }
        break;    

        case 'president apartment' :
            if (daysStaying > 15) {
                pricePerNight = 0.8*35
            } else if (daysStaying>=10) {
                pricePerNight=0.85*35
            } else {
                pricePerNight = 0.9*35
            }
        break;
    }

    let totalPrice = 0
    
    switch (feedback) {
        case 'positive':
            totalPrice = daysStaying*pricePerNight*1.25
            break;
    
        default:
            totalPrice = daysStaying*pricePerNight*0.9
            break;
    }
    console.log(totalPrice.toFixed(2));



}
santasHoliday(['14',
    'apartment',
    'positive',
    ])