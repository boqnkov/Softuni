function passwordReset(input) {
    let password = input.shift();

    let command = input.shift();

    while (command != 'Done') {

        let tokens = command.split(' ')
        let action = tokens.shift();

        let tempPass = ''
        if (action == 'TakeOdd') {
            for (let i = 1; i < password.length; i += 2) {
                tempPass += password[i]
            }
            password = tempPass
            console.log(password);
        } else if (action == 'Cut') {
            
            let startIdx = Number(tokens[0])
            let length = Number(tokens[1])
            let sub = password.substring(startIdx, startIdx + length)
            password = password.replace(sub,'')
            console.log(password);
        } else if (action == 'Substitute'){
            let substr = tokens[0]
            let subst = tokens[1]

            if (password.includes(substr)){
                while (password.includes(substr)){
                    password = password.replace(substr, subst)
                }
                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }
        }

        command = input.shift();

    }
    console.log(`Your password is: ${password}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
