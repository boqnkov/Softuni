function summerOutfit(input) {

    let graduses = Number(input[0]);
    let time = input[1];
    let outfit = '';
    let shoes = '';

    switch (time) {
        case 'Morning':
            if (graduses >= 10 && graduses <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (graduses > 18 && graduses <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (graduses >= 25) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            break;


        case 'Afternoon':
            if (graduses >= 10 && graduses <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (graduses > 18 && graduses <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else if (graduses >= 25) {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            }
            break;

        case 'Evening':
            if (graduses >= 10 && graduses <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (graduses > 18 && graduses <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (graduses >= 25) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            break;


    }
    console.log(`It's ${graduses} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["16", "Morning"]);
