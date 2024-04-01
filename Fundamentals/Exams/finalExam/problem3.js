function problem3(input) {
    
    
        let animals = {};
        let command = input.shift()
        while (command != 'EndDay') {
            command = command.split(': ')
            let action = command.shift();
    
            if (action == 'Add') {
                command = command[0].split('-')
                let name = command[0];
                let dailyLimit = Number(command[1]);
                let area = command[2];
    
                if (!(name in animals)) {
                    animals[name] = { dailyLimit, area }
                } else {
                    animals[name]['dailyLimit'] += dailyLimit
                }
            } else if (action == 'Feed') {
                command = command[0].split('-')
                let name = command[0];
                let food = Number(command[1]);
                
    
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
                
                if (!(animals[animal]['area'] in areas)){
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
        console.log(`Animals:`);
        resultentries.forEach((el)=> console.log(` ${el[0]} -> ${el[1]}g`))

        console.log(`Areas with hungry animals:`);
        for (let area in areas){
            console.log(`${area}: ${areas[area].length}`);
        }

}
problem3(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])

