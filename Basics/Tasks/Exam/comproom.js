function comproom(input) {
  
    let month = input[0];
    let hours = Number(input[1]);
    let people = Number(input[2]);
    let partOfDay = input[3];

    let pricePerHour  = 0
    let totalPrice = 0
    switch (month) {
        case 'march':
        case 'april':
        case 'may':
            if (partOfDay === 'day'){
                pricePerHour = 10.50
                if (people>= 4){
                    pricePerHour = pricePerHour*0.9
                } 
                if (hours >= 5){
                    pricePerHour = pricePerHour*0.5
                }
                totalPrice = pricePerHour*people*hours

            } else {
                pricePerHour = 8.40
                if (people>= 4){
                    pricePerHour = pricePerHour*0.9
                }
                if (hours >= 5){
                    pricePerHour = pricePerHour*0.5
                }
                totalPrice = pricePerHour*people*hours
            }
            break;
    
        case 'june':
        case 'july':
        case 'august':
            if (partOfDay === 'day'){
                pricePerHour = 12.60
                if (people>= 4){
                    pricePerHour = pricePerHour*0.9
                }
                totalPrice = pricePerHour*people*hours

            } else {
                pricePerHour = 10.20
                if (people>= 4){
                    pricePerHour = pricePerHour*0.9
                }
                if (hours >= 5){
                    pricePerHour = pricePerHour*0.5
                }
                totalPrice = pricePerHour*people*hours
            }

            break;
    }
console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
    





}
comproom(['march',
    '3',
    '3',
    'day'
    ])