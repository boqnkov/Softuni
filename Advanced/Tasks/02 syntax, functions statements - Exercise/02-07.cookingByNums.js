function cookingByNums(...params) {

    let number = Number(params[0])
    
    let dictionary = {
        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x * 3,
        fillet: x => x * 0.8,
    }

    for (let i = 1; i< params.length; i++) {
        const cmd = params[i];

        number = dictionary[cmd](number)
        
        console.log(number);
        
    }
}
cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop')