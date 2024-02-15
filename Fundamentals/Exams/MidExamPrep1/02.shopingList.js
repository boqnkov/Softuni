function shoppingList(arr) {
    let list = arr.shift().split('!')
    for (let command of arr) {
        let curCommand = command.split(',')
        let commandAsArr = curCommand[0].split(' ')
        if (commandAsArr[0] == 'Urgent') {
            if (!(list.includes(commandAsArr[1]))) {
                list.unshift(commandAsArr[1])
            }
        } else if (commandAsArr[0] == 'Unnecessary') {
            if (list.includes(commandAsArr[1])) {
                let index = list.indexOf(commandAsArr[1])
                list.splice(index, 1)
            }
        } else if (commandAsArr[0] == 'Correct') {
            if (list.includes(commandAsArr[1])) {
                let index = list.indexOf(commandAsArr[1])
                list.splice(index, 1, commandAsArr[2])
            }
        } else if (commandAsArr[0] == 'Rearrange') {
            if (list.includes(commandAsArr[1])) {
                let found = list.find((element) => element == commandAsArr[1])
                list.push(found)
            }
        }
    }
    console.log(list.join(', '));
}
shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)
