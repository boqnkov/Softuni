function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;

    let roomsInfo = arr[0]
    let rooms = roomsInfo.split('|')
    let roomCounter = 0

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i]
        let roomArr = room.split(' ')
        roomCounter++

        if (roomArr[0] == 'potion') {
            let newHP = health + Number(roomArr[1]) <= 100 ? Number(roomArr[1]) : 100 - health
            health += newHP
            console.log(`You healed for ${newHP} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (roomArr[0] == 'chest') {
            coins += Number(roomArr[1])
            console.log(`You found ${Number(roomArr[1])} coins.`);
        } else {
            let monsterName = roomArr[0];
            health -= Number(roomArr[1]);
            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${roomCounter}`);
                return

            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])