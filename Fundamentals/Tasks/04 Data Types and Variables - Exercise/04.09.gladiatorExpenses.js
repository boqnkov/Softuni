function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let yearExpenses = 0;
    let shieldBrakes = 0

    for( let currentGame = 1; currentGame<=lostFights; currentGame++){
        if (currentGame%2==0){
            yearExpenses+=helmetPrice
        } 
        if (currentGame%3==0) {
            yearExpenses+=swordPrice
        }
        if (currentGame%2==0 && currentGame%3==0){
            yearExpenses+=shieldPrice
            shieldBrakes++
        }
        if (shieldBrakes%2==0 && shieldBrakes>0){
            yearExpenses+=armorPrice
            shieldBrakes=0
        }

    }
    console.log(`Gladiator expenses: ${yearExpenses.toFixed(2)} aureus`);
}
gladiator(23,
    12.50,
    21.50,
    40,
    200)