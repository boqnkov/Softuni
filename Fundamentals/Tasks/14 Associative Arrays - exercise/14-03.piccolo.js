function piccolo(input) {

    let parkingStatus = {};

    for (let carAction of input) {

        let [action, number] = carAction.split(', ');

        if (action == 'IN') {
            parkingStatus[number] = 1;
        } else {
            parkingStatus[number] = 0;
        }
    }

    if (Object.values(parkingStatus).includes(1)) {
        let entries = Object.entries(parkingStatus)
            .filter(car => car[1] == 1)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(a => console.log(a[0]))

    } else {
        console.log('Parking Lot is Empty');
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)