function weather(input) {
    
    let degr = Number(input[0]);

    if (degr > 35) {
        console.log(`unknown`);
    } else if (degr >= 26) {
        console.log(`Hot`);
    } else if (degr >= 20.1) {
        console.log(`Warm`)
    } else if (degr >= 15) {
        console.log(`Mild`);
    } else if (degr >= 12) {
        console.log(`Cool`);
    } else if (degr >= 5) {
        console.log(`Cold`);
    } else {
        console.log(`unknown`);
    }
}
weather([5]);