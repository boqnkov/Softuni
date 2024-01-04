function houseParty(arr) {
    let output = []

    for (let command of arr){
        
        let token = command.split(' ');
        let name = token[0]
        if (token.includes('not')){
            if (output.includes(name)){
                let index = output.indexOf(name)
                output.splice(index, 1)
            } else {

                console.log(`${name} is not in the list!`);
            }
        } else {
            if (output.includes(name)){
              console.log(`${name} is already in the list!`);
            } else {
                output.push(name)
            }
        }
    }

   console.log(output.join('\n'));
}
// houseParty(
// [
// 'Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!']
// )
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)