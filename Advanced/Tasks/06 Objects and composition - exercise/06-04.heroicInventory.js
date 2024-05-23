function heroicInventory(arr) {
    
    let result = [];

    for (let i = 0; i<arr.length; i++){
        let tokens = arr[i]
        if (tokens.trim() !== ''){
        let [name, level, items] = tokens.split(' / ')
        level = Number(level)
        items = items ? items.split(', ') : [];
        

        result.push({name, level, items})
        }
    }
      
return JSON.stringify(result)


}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)