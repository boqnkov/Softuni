function problem2(input) {
    let string = input.shift()

    let command = input.shift();

    while (command!= 'Done'){
        let tokens = command.split(' ')
        // console.log(tokens);

        let action = tokens[0];

        if (action == 'Change'){
            let char = tokens[1];
            let repl = tokens[2];

            while(string.includes(char)){
                string = string.replace(char, repl)
            }
            console.log(string);
        } else if (action == 'Includes'){
            let substring = tokens[1];
            if ( string.includes(substring)){
                console.log('True');
                
            } else {
                console.log('False');
            }
            
            
        } else if (action == 'End'){
            let substring = tokens[1];

            if (string.endsWith(substring)){
                console.log(`True`);
            } else {
                console.log(`False`);

            }
        } else if (action == 'Uppercase'){
            string = string.toUpperCase()
            console.log(string);
        } else if (action == 'FindIndex'){
            let char = tokens[1];
            let idx = string.indexOf(char)
            console.log(idx);
        } else if (action == 'Cut'){
            let startIdx = Number(tokens[1]);
            let count = Number(tokens[2]);

            let substring = string.substring(startIdx, startIdx + count)
            console.log(substring);
        }





        command = input.shift()
    }

}
problem2(["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])
