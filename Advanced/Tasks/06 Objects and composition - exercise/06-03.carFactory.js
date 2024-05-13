function carFactory(object) {
   
    let wheelsize = object.wheelsize % 2 !== 0 ? object.wheelsize : object.wheelsize - 1
   
    let engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 }
    }

    let car = {
        model: object.model,
        engine: null,
        carriage: {
            type: object.carriage,
            color: object.color
        },
        wheels: new Array(4).fill(wheelsize)
    }

    if (object.power <= 90){
        car.engine = engines.smallEngine
    } else if (object.power <= 120){
        car.engine = engines.normalEngine
    } else {
        car.engine = engines.monsterEngine
    }

    return car


}
console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))