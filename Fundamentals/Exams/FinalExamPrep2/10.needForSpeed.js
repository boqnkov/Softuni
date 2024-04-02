function needForSpeed(input) {
    let carsNum = Number(input.shift());
    let cars = {};
    let command = input.shift()

    for (let i = 0; i < carsNum; i++) {
        command = command.split('|')
        let car = command[0];
        let mileage = Number(command[1]);
        let fuel = Number(command[2]);

        cars[car] = { mileage, fuel };
        command = input.shift();
    }

    while (command != 'Stop') {

        command = command.split(' : ');
        let action = command[0];

        if (action == 'Drive') {
            let car = command[1];
            let distance = Number(command[2]);
            let fuel = Number(command[3]);

            if (fuel > cars[car]['fuel']) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                cars[car]['mileage'] += distance;
                cars[car]['fuel'] -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (cars[car]['mileage'] >= 100000) {
                    delete cars[car]
                    console.log(`Time to sell the ${car}!`);
                }
            }

        } else if (action == 'Refuel') {
            let car = command[1];
            let fuel = Number(command[2]);

            if ((fuel + cars[car]['fuel'])> 75){
                let diff = (fuel + cars[car]['fuel']) - 75
                let filled = fuel - diff
                console.log(`${car} refueled with ${filled} liters`);
                cars[car]['fuel'] = 75
            } else {
                console.log(`${car} refueled with ${fuel} liters`);
                cars[car]['fuel']+=fuel

            }

        } else if (action == 'Revert'){
            let car = command[1];
            let km = Number(command[2]);
            cars[car]['mileage']-=km;
            
            if (cars[car]['mileage']>= 10000){
                console.log(`${car} mileage decreased by ${km } kilometers`);
            } else {
                cars[car]['mileage'] = 10000
            }
        }


        command = input.shift();

    }

    for (let car in cars){
        let curCar = car
        let mileage = cars[car]['mileage']
        let fuel = cars[car]['fuel']
        console.log(`${curCar} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])