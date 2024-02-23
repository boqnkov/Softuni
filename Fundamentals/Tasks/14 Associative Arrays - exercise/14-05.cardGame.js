function cardGame(arr) {

    let finalResult = {};

    for (let command of arr) {
        let [name, cards] = command.split(': ');
        let powerOfCards = cards.split(', ')
        let setOfCards = new Set(powerOfCards)
        console.log(setOfCards);

        for (let curCard of setOfCards) {
            let curCardAsArr = curCard.split('')
            let type = curCardAsArr.pop()
            let powerAsSybmol = curCardAsArr.join('')
            let power = 0
            let typePower = 0
            if (type == 'S') {
                typePower = 4
            } else if (type == 'H') {
                typePower = 3
            } else if (type == 'D') {
                typePower = 2
            } else if (type == 'C') {
                typePower = 1
            }

            if (powerAsSybmol == 'J') {
                power = 11
            } else if (powerAsSybmol == 'Q') {
                power = 12
            } else if (powerAsSybmol == 'K') {
                power = 13
            } else if (powerAsSybmol == 'A') {
                power = 14
            } else {
                power = Number(powerAsSybmol)
            }
            let powerOfCurCard = typePower * power

            if (name in finalResult) {
                finalResult[name] += powerOfCurCard

            } else {
                finalResult[name] = powerOfCurCard
            }
        }
    }

    let entries = Object.entries(finalResult)
    for (let [name, result] of entries) {
        console.log(`${name}: ${result}`);
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)