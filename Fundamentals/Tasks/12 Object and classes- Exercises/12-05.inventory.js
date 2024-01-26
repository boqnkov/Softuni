function inventory(array) {

    let finalArr = []

    for (let infoForHero of array) {
        let [heroName, heroLevel, items] = infoForHero.split(' / ')

        let register = {}
        register.Hero = heroName;
        register.level = heroLevel;
        register.items = items;

        finalArr.push(register)
    }

    finalArr.sort((a, b) => (a.level) - (b.level))

    for (let hero of finalArr) {

        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]
// )

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    )