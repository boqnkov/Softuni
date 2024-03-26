function fancyBarcode(input) {
    let patternValid = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/
    let patternDigit = /\d/g

    let rows = Number(input.shift())
 
    for (let i = 0; i < rows; i++) {
        if (patternValid.test(input[i])) {
            let match = input[i].match(patternDigit)
            if (match) {
                console.log(`Product group: ${match.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
fancyBarcode((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
)