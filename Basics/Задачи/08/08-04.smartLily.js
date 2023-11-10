function smartLily(input) {
    
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let moneySaved = 0;
    let toyCount = 0;
    let moneyForCurrentYear=0;

    for (let i=1; i<=age; i++) {
        
        if (i % 2 !==0){
            toyCount+=1
        } else {
            
            moneyForCurrentYear+=10
            moneySaved=(moneySaved + (moneyForCurrentYear -1))
        }
    }

    let toyPrice = toyCount * pricePerToy;

    let totalMoneySaved = toyPrice+moneySaved;

    let diff = Math.abs(totalMoneySaved - washerPrice);

    if (totalMoneySaved >= washerPrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
smartLily(["21",
"1570.98",
"3"])



