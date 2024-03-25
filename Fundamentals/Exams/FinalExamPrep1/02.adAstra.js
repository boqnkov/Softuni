function adAstra(input) {

    let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>\d\d\/\d\d\/\d\d)\1(?<kCal>\d{1,5})\1/g

    let totalCal = 0
    let arrayForPrint = [];

    let match = pattern.exec(input[0])

    while (match) {
        let kCal = Number(match.groups.kCal)
        let food = match.groups.name
        let date = match.groups.date

        totalCal += kCal

        let text = `Item: ${food}, Best before: ${date}, Nutrition: ${kCal}`
        arrayForPrint.push(text)
        match = pattern.exec(input[0])
    }

    let days = Math.floor(totalCal / 2000)
    console.log(`You have food to last you for: ${days} days!`);
    arrayForPrint.forEach(x => console.log(x))
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)