function cardGame(arr) {
    
    let finalResult = {};

    for (let command of arr){
        let [name, cards] = command.split(': ');
        let powerOfCards = cards.split(', ')
        console.log(cards);
        // if (!(name in finalResult)){
        //     finalResult[name] = 0
        // }
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