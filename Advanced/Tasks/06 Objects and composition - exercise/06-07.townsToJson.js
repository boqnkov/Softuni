function townsToJson(input) {
    let result = [];

    for (let i = 1; i < input.length; i++) {

        let [name, Latitude, Longitude] = input[i].split("|").map(x => x.trim()).filter(x => !!x);
        Latitude = Number(Latitude).toFixed(2)
        Longitude = Number(Longitude).toFixed(2);
        result.push({ Town: name, Latitude: Number(Latitude), Longitude: Number(Longitude) })
    }
    console.log(JSON.stringify(result));
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)