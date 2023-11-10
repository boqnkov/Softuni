function foodDelivery(input) {

    let chikenMenues = Number(input[0]) * 10.35;
    let fishMenues = Number(input[1])*12.4;
    let vegMenues = Number(input[2])*8.15;
    let dessertPrice = (chikenMenues+fishMenues+vegMenues)*0.2;

    let finalPrice = chikenMenues+fishMenues+vegMenues+dessertPrice+2.5;

    console.log(finalPrice);



}

foodDelivery(["2", "4","3"])