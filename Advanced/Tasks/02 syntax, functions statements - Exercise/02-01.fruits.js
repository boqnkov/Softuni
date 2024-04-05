function fruits(type, weight, price) {
    let kilos = weight/1000
    let neededMoney = kilos*price
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${type}.`);
}
fruits('orange', 2500, 1.80)