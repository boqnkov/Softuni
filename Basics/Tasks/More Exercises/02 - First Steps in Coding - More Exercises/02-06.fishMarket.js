function fishMarket(input) {

    let skumriaPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let kgPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMidi = Number(input[4]);

    let palamudPrice = skumriaPrice * 1.6;
    let safridPrice = cacaPrice * 1.8;
    let midiPrice = 7.5;

    let price = kgPalamud * palamudPrice + kgSafrid * safridPrice + kgMidi * midiPrice;

    console.log(price.toFixed(2));

}
fishMarket(['6.90',
    '4.20',
    '1.5',
    '2.5',
    '1'
])