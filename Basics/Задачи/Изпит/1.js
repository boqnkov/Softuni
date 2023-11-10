function excursion(input) {
   
    let people = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);

    let nightsPrice = nights*20;
    let transportPrice = transportCards*1.6;
    let museumPrice = museumTickets*6;

    let totalPerPerson = nightsPrice + transportPrice + museumPrice

    let totalPrice = people*totalPerPerson*1.25;

    console.log(totalPrice.toFixed(2));
    
}
excursion(['20',
    '14',
    '30',
    '6',
    ])