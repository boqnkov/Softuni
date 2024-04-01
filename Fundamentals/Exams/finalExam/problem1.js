function problem1(input) {
   let pattern = /[@|#]+(?<name>[a-z]{3,})[@|#]+\W*\/+(?<amount>\d+)\/+/g

   let text = input[0]

   let match = pattern.exec(text)

   while (match){
    let colour = match.groups.name
    let amount = match.groups.amount

    console.log(`You found ${amount} ${colour} eggs!`);
    match = pattern.exec(text)
   }
    
}
problem1(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])