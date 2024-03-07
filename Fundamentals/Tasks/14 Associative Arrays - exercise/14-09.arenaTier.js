function arenaTier(input) {
    let gladiatorPool = {};

    let command = input.shift()

    while (command != "Ave Cesar") {
        let [firstEl, secondEl, skill] = command.split(' -> ');
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
                let technArr = []
                let entries = Object.values(gladiatorPool)
                for (let techniques of entries) {
                    let array = Object.keys(techniques)
                    technArr.push(...array)
                }
                let set = new Set(technArr)

                if (technArr.length == set.size) {
                    let totalScore1 = 0;
                    let totalScore2 = 0;

                    let values1 = Object.values(gladiatorPool[gladiator1])
                    values1.forEach(x => totalScore1 += Number(x))


                    let values2 = Object.values(gladiatorPool[gladiator2])
                    values2.forEach(x => totalScore2 += Number(x))

                    totalScore1 > totalScore2 ? delete gladiatorPool[gladiator2] : delete gladiatorPool[gladiator1]
                }
            }
        }
        command = input.shift()
    }


    let skillPoints = {}

    for (let gladiator in gladiatorPool) {

        skillPoints[gladiator] = 0
        let value = Object.values(gladiatorPool[gladiator])
        value.forEach(skill => skillPoints[gladiator] += Number(skill))
    }
    let entries = Object.entries(skillPoints);
    let sorted = entries.sort((a,b) => (b[1] - a[1]) || (a[0].localeCompare(b[0])))
    

    let sortedTechniques = {}
    for (let entry in gladiatorPool){
        let entriesFromPool = Object.values(entry)
        sortedTechniques[entriesFromPool[0][0]] = sorted
    }
    let techentries = Object.entries(entry[1])
    let techsorted = techentries.sort((a,b) => (b[1] - a[1]) || (a[0].localeCompare(b[0])))

    for (let [gladiator, totalSkill] of sorted) {
        console.log(`${gladiator}: ${totalSkill} skill`);

        for (let technique in sortedTechniques){
            console.log(sortedTechniques);
            let tech = sortedTechniques[technique][0][0];
            let techSkill = sortedTechniques[technique][0][1]
            console.log(`- ${tech} <!> ${techSkill}`);
        }
    }

}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    
)