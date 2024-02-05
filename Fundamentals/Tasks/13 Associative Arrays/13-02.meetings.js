function meetings(array) {

    let succesfulMeetings = {};


    for (let command of array) {
        let [day, name] = command.split(` `)

        if (succesfulMeetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
            continue
        }

        succesfulMeetings[day] = name
        console.log(`Scheduled for ${day}`)

    }


    for (let [day, name] of Object.entries(succesfulMeetings)){
        console.log(`${day} -> ${name}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)
