function race(input) {
    let participantsObject = {}
    let participantsList = input.shift().split(', ')
    participantsList.forEach(element => participantsObject[element] = 0);

    let command = input.shift()
    let namePattern = /[A-Za-z]/gm
    let kmPattern = /\d/gm

    while (command != 'end of race') {
        let name = command.match(namePattern).join('')
        let km = (command.match(kmPattern).map(Number).reduce((a,b) => a+b, 0 ))

        if (name in participantsObject){
            participantsObject[name]+=km
        }

        command = input.shift()
    }
    
    let entries = Object.entries(participantsObject)
    let sorted = entries.sort((a,b) => b[1] - a[1])
    let result = []
   
    for (let i = 0; i<4; i++) {
        result.push(sorted[i][0])
    }

    console.log(`1st place: ${result[0]}`);
    console.log(`2nd place: ${result[1]}`);
    console.log(`3rd place: ${result[2]}`);

}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)