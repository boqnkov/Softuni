function weather(input) {
    let gr = Number(input[0]);

    if (gr>35) {
        console.log(`unknown`);
    } else if (gr>=26) {
        console.log(`Hot`);
    } else if (gr>=20.1) {
        console.log(`Warm`)
    } else if (gr>=15) {
        console.log(`Mild`);
    } else if (gr>=12) {
        console.log(`Cool`);
    } else if (gr>=5) {
        console.log(`Cold`);
    } else {
        console.log(`unknown`);
    }
}
weather([0]);