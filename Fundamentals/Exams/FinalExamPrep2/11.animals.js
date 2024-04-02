function animals(input) {
    let animals = {};
    let command = input.shift()
    while (command != 'Last Info') {
        command = command.split(':')
        let action = command[0];

        if (action == 'Add') {
            let name = command[1];
            let dailyLimit = Number(command[2]);
            let area = command[3];

            if (!(name in animals)) {
                animals[name] = { dailyLimit, area }
            } else {
                animals[name]['dailyLimit'] += dailyLimit
            }
        } else if (action == 'Feed') {
            let name = command[1];
            let food = Number(command[2]);
            let area = command[3];

            if (name in animals) {
                animals[name]['dailyLimit'] -= food
                if (animals[name]['dailyLimit']<=0){
                    delete animals[name];
                    console.log(`${name} was successfully fed`);
                }
            }
        }
        command = input.shift()
    }

    let areas = {};

        for (let animal in animals){
            
            if (!(areas[animals[animal]['area']] in areas)){
                areas[animals[animal]['area']] = [animal]
            } else {
                areas[animals[animal]['area']].push(animal)
            }
        }

    let entries = Object.entries(animals)
    let resultentries = [];
    for (let entry of entries){
        let arr = [entry[0], entry[1]['dailyLimit']]
        resultentries.push(arr)
    }

    console.table(entries)
    console.table(resultentries)

}
animals(['Add:Maya:7600:WaterfallArea',
    'Add:Bobbie:6570:DeepWoodsArea',
    'Add:Adam:4500:ByTheCreek',
    'Add:Jamie:1290:RiverArea',
    'Add:Gem:8730:WaterfallArea',
    'Add:Maya:1230:WaterfallArea',
    'Add:Jamie:560:RiverArea',
    'Feed:Bobbie:6300:DeepWoodsArea',
    'Feed:Adam:4650:ByTheCreek',
    'Feed:Jamie:2000:RiverArea',
    'Last Info'
])