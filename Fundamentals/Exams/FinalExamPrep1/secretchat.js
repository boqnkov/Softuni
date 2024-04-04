function secretChat(arr) {
    let message = arr.shift();
 
    while (arr[0] !== 'Reveal') {
 
        let line = arr.shift();
        let tokens = line.split(':|:');
        let command = tokens[0];
 
        switch (command) {
            case 'ChangeAll': {
                let match = tokens[1];
                let replacement = tokens[2];
                let parts = message.split(match);
                message = parts.join(replacement);
                break;
            }
            case 'Reverse': {
                let substring = tokens[1];
                let firstIndex = message.indexOf(substring);
 
                if (firstIndex === -1) {
                    console.log('error');
                    continue;
                }
                let left = message.slice(0,firstIndex);
                let right = message.slice(firstIndex + substring.length);
                message = left + right + substring.split('').reverse().join('');
                break;
            }
 
        }
        console.log(message);
    }
}
 
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);