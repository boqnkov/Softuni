function arenaTier(input) {
    let gladiatorPool = {};

    let command = input.shift()

    while (command != "Ave Cesar") {
        let [firstEl, secondEl, skill] = command.split(' -> ');
        skill = Number(skill)
        if (skill) {
            let gladiator = firstEl
            let technique = secondEl
            if (gladiator in gladiatorPool) {
                if (!(technique in gladiatorPool[gladiator])) {
                    gladiatorPool[gladiator][technique] = skill
                } else {
                    if (gladiatorPool[gladiator][technique] < skill) {
                        gladiatorPool[gladiator][technique] = skill
                    }
                }
            } else {
                gladiatorPool[gladiator] = { [technique]: skill }
                
            }
        } else {
            let [gladiator1, gladiator2] = firstEl.split(' vs ')
            if ((gladiator1 in gladiatorPool) && (gladiator2 in gladiatorPool)) {
                
                let keysGlad1 = Object.keys(gladiatorPool[gladiator1])
                let keysGlad2 = Object.keys(gladiatorPool[gladiator2])
                keysGlad1.push(...keysGlad2)

                let set = new Set(keysGlad1)
                let setSize = set.size

                if (keysGlad1.length != set.size){
                    let totalPointsGlad1Arr = Object.values(gladiatorPool[gladiator1])
                    let totalPointsGlad2Arr = Object.values(gladiatorPool[gladiator2])
                    let totalPointsGlad1 = totalPointsGlad1Arr.reduce((acc, curVal) => acc+curVal)
                    let totalPointsGlad2 = totalPointsGlad2Arr.reduce((acc, curVal) => acc+curVal)

                    if (totalPointsGlad1 > totalPointsGlad2){
                        delete gladiatorPool[gladiator2]
                    } else if (totalPointsGlad1 < totalPointsGlad2){
                        delete gladiatorPool[gladiator1]
                    }
                }
            }
        }
        command = input.shift()
    }

    for (let gladiator in gladiatorPool) {

        gladiatorPool[gladiator]['totalSkill'] = 0
        let value = Object.values(gladiatorPool[gladiator])
        value.forEach(skill => gladiatorPool[gladiator]['totalSkill'] += Number(skill))
    }
    
    let sorted = Object.entries(gladiatorPool).sort((a,b)=>b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0]))
    
    for (let gladiator of sorted){
        let name = gladiator[0];
        let skill = gladiator[1].totalSkill
        console.log(`${name}: ${skill} skill`);

        let sortedTechs = Object.entries(gladiatorPool[name]).sort((a,b)=>b[1] - a[1] || a[0].localeCompare(b[0]))
    
        for (let tech of sortedTechs){
            let technique = tech[0]
            let skill = tech[1]

            if (technique == 'totalSkill'){
                continue;
            }
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    )








// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
//     ]
    
// )