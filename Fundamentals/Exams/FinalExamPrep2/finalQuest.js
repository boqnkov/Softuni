function theFinalQuest(arr) {
    let words = arr.shift().split(' ');
    let command = arr.shift();
 
    while (command !== 'Stop') {
        let tokens = command.split(' ');
        let action = tokens.shift();
 
        if (action === 'Delete') {
            let deletedIdx = tokens.shift();
 
            if (deletedIdx >= 0 && deletedIdx < words.length) {
                words.splice(deletedIdx, 1);
            }
 
        } else if (action === 'Swap') {
            let word1 = tokens[0];
            let word2 = tokens[1];
 
            if (words.includes(word1) && words.includes(word2)) {
                let idx1 = words.indexOf(word1);
                let idx2 = words.indexOf(word2);
                [words[idx1], words[idx2]] = [words[idx2], words[idx1]];
            }
 
        } else if (action === 'Put') {
            let word = tokens.shift();
            let idx = tokens.shift();
 
            if (idx >= 0 && idx < words.length) {
                words.splice(idx - 1, 0, word);
            } else {
                words.push(word);
            }
        } else if (action === 'Sort') {
            words.sort((a, b) => b.localeCompare(a));
 
        } else if (action === 'Replace') {
            let [word1, word2] = tokens;
            let idx = words.indexOf(word2);
            if (idx !== -1) {
                words[idx] = word1;
 
            }
        }
        command = arr.shift();
    }
 
    console.log(`${words.join(' ')}`);
}

theFinalQuest(["Congratulations! You last also through the have challenge!",
"Swap have last",
"Replace made have",
"Delete 2",
"Put it 4",
"Stop"])
