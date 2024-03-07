function partyTime(input) {
    
    let guestList = { vipGuests: [], regualrGuests: [] };

    let command = input.shift()

    while (command != 'PARTY') {

        if (!(isNaN(command.charAt(0)))) {
            guestList['vipGuests'].push(command)
        } else {
            guestList['regualrGuests'].push(command)
        }
        command = input.shift()
    }

    for (let guest of input) {
        
        if (guestList['vipGuests'].includes(guest)) {
            let index = guestList['vipGuests'].indexOf(guest)
            guestList['vipGuests'].splice(index, 1)
        } else if (guestList['regualrGuests'].includes(guest)) {
            let index = guestList['regualrGuests'].indexOf(guest)
            guestList['regualrGuests'].splice(index, 1)
        }
    }
    
    let missing = []
    missing.push(...guestList['vipGuests'])
    missing.push(...guestList['regualrGuests'])
    console.log(missing.length);
    missing.forEach(el => console.log(el))

}
// partyTime(['7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ]
// )

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)