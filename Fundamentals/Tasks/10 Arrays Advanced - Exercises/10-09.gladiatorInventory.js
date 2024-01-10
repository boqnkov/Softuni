function gladiatorInventory(arr) {
    let inventoryAsStr = arr.shift();
    let inventory = inventoryAsStr.split(' ')


    for (let command of arr) {
        let tokens = command.split(' ')
        let action = tokens[0]
        let equipment = tokens[1];

        if (action == 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment)
            }
        } else if (action == 'Trash') {
            if (inventory.includes(equipment)) {
                let idx = inventory.indexOf(equipment);
                inventory.splice(idx, 1)
            }
        } else if (action == 'Repair') {
            if (inventory.includes(equipment)) {
                let idx = inventory.indexOf(equipment);
                let repairedEq = inventory[idx];
                inventory.splice(idx, 1);
                inventory.push(repairedEq)
            }
        } else if (action == 'Upgrade') {
            let eqAsArr = equipment.split('-')
            let eq = eqAsArr[0];
            let upgrade = eqAsArr[1];
            if (inventory.includes(eq)) {
                let idx = inventory.indexOf(eq);
                let addedEl = `${eq}:${upgrade}`
                inventory.splice(idx + 1, 0, addedEl)
            }
        }
    }
    console.log(inventory.join(' '));
}


// gladiatorInventory(['SWORD Shield Spear',
// 'Buy Bag',
// 'Trash Shield',
// 'Repair Spear',
// 'Upgrade SWORD-Steel']
// )

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
)