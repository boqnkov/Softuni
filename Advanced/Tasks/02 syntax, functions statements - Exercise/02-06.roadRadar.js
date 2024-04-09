function roadRadar(speed, type) {
    // let limit = 0
    // let status = ''
    // let diff = 0
    // switch (type) {
    //     case "motorway":
    //         limit = 130
    //         diff = Math.abs(speed - limit)

    //         if (speed <= limit) {
    //             console.log(`Driving ${speed} km/h in a ${limit} zone`);
    //         } else {
    //             if (diff > 40) {
    //                 status = 'reckless driving'
    //             } else if (diff > 20) {
    //                 status = 'excessive speeding'
    //             } else {
    //                 status = 'speeding'
    //             }

    //             console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    //         }
    //         break;
    //     case "interstate":
    //         limit = 90
    //         diff = Math.abs(speed - limit)

    //         if (speed <= limit) {
    //             console.log(`Driving ${speed} km/h in a ${limit} zone`);
    //         } else {
    //             if (diff > 40) {
    //                 status = 'reckless driving'
    //             } else if (diff > 20) {
    //                 status = 'excessive speeding'
    //             } else {
    //                 status = 'speeding'
    //             }

    //             console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    //         }
    //         break;

    //         case "city":
    //         limit = 50
    //         diff = Math.abs(speed - limit)

    //         if (speed <= limit) {
    //             console.log(`Driving ${speed} km/h in a ${limit} zone`);
    //         } else {
    //             if (diff > 40) {
    //                 status = 'reckless driving'
    //             } else if (diff > 20) {
    //                 status = 'excessive speeding'
    //             } else {
    //                 status = 'speeding'
    //             }

    //             console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    //         }
    //         break;

    //         case "residential":
    //         limit = 20
    //         diff = Math.abs(speed - limit)

    //         if (speed <= limit) {
    //             console.log(`Driving ${speed} km/h in a ${limit} zone`);
    //         } else {
    //             if (diff > 40) {
    //                 status = 'reckless driving'
    //             } else if (diff > 20) {
    //                 status = 'excessive speeding'
    //             } else {
    //                 status = 'speeding'
    //             }

    //             console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    //         }
    //         break;
    //     default:
    //         break;
    // }

    const limitsDictionary = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let limit = limitsDictionary[type]

    if (speed <= limit){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return
    } else {
        let status = '';
        let diff = speed - limit;
        if (diff > 40){
            status = 'reckless driving'
        } else if (diff > 20){
            status = 'excessive speeding'
        } else if (diff > 0){
            status = 'speeding'
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
roadRadar(120, 'interstate')