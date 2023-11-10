function bitcoin(input) {
    
    let totalGoldValue = 0
    let day = 0
    let curDayGoldPrice = 0
    let bitcoinDay = 0
    let bitcoinSwitch = true
    let totalBitcoins = 0
    for ( let i = 0; i<input.length; i++){
        day++
        if (day % 3 ==0){
            curDayGoldPrice = (Number(input[i]) * 67.51) * 0.7
            totalGoldValue += curDayGoldPrice
            
        } else {
            curDayGoldPrice = Number(input[i]) * 67.51
            totalGoldValue += curDayGoldPrice
        }
        if (totalGoldValue >= 11949.16 && bitcoinSwitch == true){
            bitcoinDay = day
            bitcoinSwitch= false
        }

    }
    totalBitcoins = Math.floor(totalGoldValue / 11949.16)
    let moneyLeft = totalGoldValue - (totalBitcoins*11949.16)

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins>=1){
        console.log(`Day of the first purchased bitcoin: ${bitcoinDay}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}
bitcoin([50, 100])