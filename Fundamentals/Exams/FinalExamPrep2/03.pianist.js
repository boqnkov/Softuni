function pianist(arr) {
    let piecesNum = Number(arr.shift());
    let piecesObj = {};

    for (let i = 0; i < piecesNum; i++) {
        let curLine = arr.shift().split('|')
        let piece = curLine[0];
        let composer = curLine[1];
        let key = curLine[2];

        piecesObj[piece] = { composer, key }
    }
    // console.table(piecesObj)

    let command = arr.shift();

    while (command!== 'Stop'){
        let tokens = command.split('|')
        let instruction = tokens[0];
        
        if (instruction== 'Add'){
            let piece = tokens[1];
            let composer = tokens[2];
            let key = tokens[3];

            if (piece in piecesObj){
                console.log(`${piece} is already in the collection!`);
            } else {
                piecesObj[piece] = { composer, key }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        }

        if (instruction== 'Remove'){
            let pieceRem = tokens[1];
            
            if (pieceRem in piecesObj){
                delete piecesObj[pieceRem]
                console.log(`Successfully removed ${pieceRem}!`);
            } else {
                console.log(`Invalid operation! ${pieceRem} does not exist in the collection.`);
            }
        }

        if (instruction== 'ChangeKey'){
            let piece = tokens[1];
            let newKey = tokens[2];

            if (piece in piecesObj){
                piecesObj[piece]['key'] = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        command = arr.shift()
    }

    for (let piece in piecesObj){
        let composer = piecesObj[piece]['composer']
        let key = piecesObj[piece]['key']
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
}
// pianist([
//     '3',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Fur Elise|Beethoven|A Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]
// )
pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)