function houseParty(arr) {
    let output = []

    for (let i=0; i<arr.length; i++){
        let command = arr[i];
        let token = command.split(' ');

        if (token.length == 3){
            if (output.includes(token[0])){
                output.unshift(`${token[0]} is already in the list!`)
            } else {
                output.push(token[0])
            }
        } else {
            if (output.includes(token[0])){
               let deletedIndex = output.indexOf(token[0])
                output.splice(deletedIndex, 1)
            } else {
                output.unshift(`${token[0]} is not in the list!`)
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