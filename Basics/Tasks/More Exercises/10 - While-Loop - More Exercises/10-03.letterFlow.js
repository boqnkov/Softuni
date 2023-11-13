function letterFlow(input) {

    let command = input[0];
    let i = 1
    let word = ''
    let text = ''
    let cCounter = 0;
    let oCounter = 0;
    let nCounter = 0;

    while (command !== 'End') {

        let currentLetter = command;

        switch (currentLetter) {
            case 'a': word += 'a'; break;
            case 'A': word += 'A'; break;
            case 'b': word += 'b'; break;
            case 'B': word += 'B'; break;
            case 'c':
                if (cCounter === 0) {
                    cCounter++;
                } else { word += 'c' }; break;
            case 'C': word += 'C'; break;
            case 'd': word += 'd'; break;
            case 'D': word += 'D'; break;
            case 'e': word += 'e'; break;
            case 'E': word += 'E'; break;
            case 'f': word += 'f'; break;
            case 'F': word += 'F'; break;
            case 'g': word += 'g'; break;
            case 'G': word += 'G'; break;
            case 'h': word += 'h'; break;
            case 'H': word += 'H'; break;
            case 'i': word += 'i'; break;
            case 'I': word += 'I'; break;
            case 'j': word += 'j'; break;
            case 'J': word += 'J'; break;
            case 'k': word += 'k'; break;
            case 'K': word += 'K'; break;
            case 'l': word += 'l'; break;
            case 'L': word += 'L'; break;
            case 'm': word += 'm'; break;
            case 'M': word += 'M'; break;
            case 'n':
                if (nCounter === 0) {
                    nCounter++;
                }
                else { word += 'n' }; break;
            case 'N': word += 'N'; break;
            case 'o':
                if (oCounter === 0) {
                    oCounter++;
                }
                else { word += 'o' }; break;
            case 'O': word += 'O'; break;
            case 'p': word += 'p'; break;
            case 'P': word += 'P'; break;
            case 'q': word += 'q'; break;
            case 'Q': word += 'Q'; break;
            case 'r': word += 'r'; break;
            case 'R': word += 'R'; break;
            case 's': word += 's'; break;
            case 'S': word += 'S'; break;
            case 't': word += 't'; break;
            case 'u': word += 'u'; break;
            case 'U': word += 'U'; break;
            case 'V': word += 'V'; break;
            case 'v': word += 'v'; break;
            case 'w': word += 'w'; break;
            case 'W': word += 'W'; break;
            case 'x': word += 'x'; break;
            case 'X': word += 'X'; break;
            case 'y': word += 'y'; break;
            case 'Y': word += 'Y'; break;
            case 'z': word += 'z'; break;
            case 'Z': word += 'Z'; break;
        }


        if (cCounter + nCounter + oCounter === 3) {
            cCounter = 0
            nCounter = 0
            oCounter = 0

            text += (`${word} `);
            word = ''
        }
        command = input[i];
        i++

        if (command === 'End') {
            break;
        }

    }
    console.log(text);
}
letterFlow([
    'H',
    'n',
    'e',
    'l',
    'l',
    'o',
    'o',
    'c',
    't',
    'c',
    'h',
    'o',
    'e',
    'r',
    'e',
    'n',
    'e',
    'End'
])