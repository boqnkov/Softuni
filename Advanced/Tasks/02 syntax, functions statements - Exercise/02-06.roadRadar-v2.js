function roadRadar(speed, type) {

    const limitsDictionary = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let limit = limitsDictionary[type]

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return
    } else {
        let status = '';
        let diff = speed - limit;
        if (diff > 40) {
            status = 'reckless driving'
        } else if (diff > 20) {
            status = 'excessive speeding'
        } else if (diff > 0) {
            status = 'speeding'
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
roadRadar(120, 'interstate')