function multTable() {

    for (let mn1 = 1; mn1 <= 10; mn1++) {
        for (let mn2 = 1; mn2 <= 10; mn2++) {
            let result = mn1 * mn2;

            console.log(`${mn1} * ${mn2} = ${result}`);
        }
    }
}
multTable()