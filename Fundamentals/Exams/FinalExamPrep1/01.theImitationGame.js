function imitationGame(input) {

    let message = input.shift();
    let command = input.shift();

    while (command !== 'Decode') {
        let tokens = command.split('|');
        let instruction = tokens[0];

        if (instruction == 'Move') {
            let numOfLet = Number(tokens[1]);
            let cutted = message.substring(0, numOfLet)
            message = message.replace(cutted, '')
            message += cutted

        } else if (instruction == 'Insert') {
            let index = Number(tokens[1]);
            let value = tokens[2];
            let messageAsArr = message.split('');
            messageAsArr.splice(index, 0, value);
            message = messageAsArr.join('')
        } else if (instruction == 'ChangeAll') {
            let substring = tokens[1];
            let replacement = tokens[2];

            for (let char of message) {
                message = message.replace(substring, replacement)
            }
        }

        command = input.shift()
    }
    console.log(`The decrypted message is: ${message}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])