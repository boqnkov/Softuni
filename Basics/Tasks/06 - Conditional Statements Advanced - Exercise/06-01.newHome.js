function newHome(input) {

    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    if (flowerType === 'Roses') {
        price = flowerCount * 5;
    } else if (flowerType === 'Dahlias') {
        price = flowerCount * 3.8;
    } else if (flowerType === 'Tulips') {
        price = flowerCount * 2.8;
    } else if (flowerType === 'Narcissus') {
        price = flowerCount * 3;
    } else if (flowerType === 'Gladiolus') {
        price = flowerCount * 2.5;
    }

    if (flowerType === 'Roses' && flowerCount > 80) {
        price *= 0.9;
    } else if (flowerType === 'Dahlias' && flowerCount > 90) {
        price *= 0.85;
    } else if (flowerType === 'Tulips' && flowerCount > 80) {
        price *= 0.85;
    } else if (flowerType === 'Narcissus' && flowerCount < 120) {
        price *= 1.15;
    } else if (flowerType === 'Gladiolus' && flowerCount < 80) {
        price *= 1.2;
    }

    let diff = Math.abs(price - budget);

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}
newHome(["Narcissus",
    "119",
    "360"])

