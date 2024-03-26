function pirates(input) {

    let list = {};
    let command = input.shift();

    while (command !== 'Sail') {
        let infoForTown = []
        let [town, population, gold] = command.split('||');
        infoForTown.push(Number(population))
        infoForTown.push(Number(gold))
        if (!(town in list)) {
            list[town] = infoForTown

        } else {
            list[town][0] += Number(population);
            list[town][1] += Number(gold)
        }

        command = input.shift()
    }
    command = input.shift()
    while (command !== 'End') {
        let tokens = command.split('=>');
        let instruction = tokens[0]
        if (instruction == 'Plunder') {
            let town = tokens[1];
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            let curPeople = list[town][0]
            let curGold = list[town][1]

            if ((curPeople >= people) && (curGold >= gold)) {

                list[town][0] -= people;
                list[town][1] -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                if (list[town][0] <= 0 || list[town][1] <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    delete list[town]
                    // list = _.omit(list,town)
                }

            }

        } else if (instruction == 'Prosper') {
            let town = tokens[1];
            let addedGold = Number(tokens[2]);

            if (addedGold < 0) {
                console.log(`Gold added cannot be a negative number!`);

            } else {
                list[town][1] += addedGold
                console.log(`${addedGold} gold added to the city treasury. ${town} now has ${list[town][1]} gold.`);
            }
        }

        command = input.shift();

    }
    let entries = Object.entries(list)

    if (entries.length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        for (let entry of entries) {
            let town = entry[0]
            let people = entry[1][0]
            let gold = entry[1][1]

            console.log(`${town} -> Population: ${people} citizens, Gold: ${gold} kg`);
        }
    }
}
// pirates((["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])
// )
pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
)