function travelTime(input) {
    let generalInfo = {};

    for (let curDest of input) {
        let [country, town, costAstr] = curDest.split(' > ')
        let cost = Number(costAstr)
        if (!(country in generalInfo)) {
            generalInfo[country] = { [town]: cost }
        } else {
            if (town in generalInfo[country]) {
                if (generalInfo[country][town] > cost) {
                    generalInfo[country][town] = cost
                }
            } else {
                generalInfo[country][town] = cost
            }
        }
    }

    let entries = Object.entries(generalInfo)
    let sortedByCountry = entries.sort((a, b) => a[0].localeCompare(b[0]))

    for (let country of sortedByCountry) {
        let countryEntries = Object.entries(country[1]);
        let sortedByCost = countryEntries.sort((a, b) => a[1] - b[1])
        let row = `${country[0]} -> `

        for (let [town, cost] of sortedByCost){
            row += `${town} -> ${cost} `
        }

        console.log(row);
    }


    

}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)