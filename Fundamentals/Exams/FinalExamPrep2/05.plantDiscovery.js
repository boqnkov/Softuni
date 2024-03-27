function plantDiscovery(input) {
    let plantsNum = Number(input.shift());
    let plants = {};

    for (let i = 0; i < plantsNum; i++) {
        let tokens = input.shift().split('<->')
        let plant = tokens[0]
        let rarity = Number(tokens[1]);
        let rating = []
        plants[plant] = { rarity, rating }
    }
    
    let command = input.shift()
    
    while (command !== 'Exhibition') {
        let [instruction, tokens] = command.split(': ')
        if (instruction == 'Rate') {
            let [plant, rating] = tokens.split(' - ')
            if (plant in plants) {
                plants[plant]['rating'].push(Number(rating))
            } else {
                console.log(`error`);
            }
        }
        
        if (instruction == 'Update') {
            let [plant, newRarity] = tokens.split(' - ')
            if (plant in plants) {
                plants[plant]['rarity'] = Number(newRarity)
            } else {
                console.log(`error`);
            }
        }
        
        if (instruction == 'Reset') {
            let plant = tokens
            if (plant in plants) {
                plants[plant]['rating'] = []
            } else {
                console.log(`error`);
            }
        }
        command = input.shift()
    }
   console.log(`Plants for the exhibition:`);
    for (let plant in plants){
        let rarity = plants[plant]['rarity'];
        
        let ratingsCount = plants[plant]['rating'].length
        let sumOfArr = plants[plant]['rating'].reduce((acc,curValue) => acc + curValue,0)
        let avgRating = 0
        if (ratingsCount != 0){
            avgRating = sumOfArr / ratingsCount
        }

        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);
    }
}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)