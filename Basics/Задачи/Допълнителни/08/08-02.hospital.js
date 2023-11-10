function hospital(input) {

    let period = Number(input[0]);
    let doctors = 7
    let treatedPatients = 0
    let untreatedPatients = 0

    for (let i = 1; i <= period; i++) {

        let PatientsPerDay = Number(input[i])

        if (i % 3 === 0 && untreatedPatients > doctors) {
            doctors++
        }

        if (PatientsPerDay <= doctors) {
            let treatedPatientsPerDay = PatientsPerDay
            treatedPatients += treatedPatientsPerDay
        } else {
            let treatedPatientsPerDay = doctors
            treatedPatients += treatedPatientsPerDay
            let untreatedPatientsPerDay = PatientsPerDay - doctors
            untreatedPatients += untreatedPatientsPerDay
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital(['6',
    '25',
    '25',
    '25',
    '25',
    '25',
    '2'
])