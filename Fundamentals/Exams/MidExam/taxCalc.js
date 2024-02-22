function taxCalc(arr) {

    let carsAsArr = arr.shift().split('>>')
    let totalTaxes = 0;

    for (let car of carsAsArr) {
        let [type, years, kilos] = car.split(' ')
        years = Number(years);
        kilos = Number(kilos)

        let curCarTax = 0
        let initalCarTax = 0;
        let yearDiscount = 0;
        let distanceCost = 0;
        switch (type) {
            case 'family':
                initalCarTax = 50;
                yearDiscount = 5 * years;
                distanceCost = (Math.floor(kilos / 3000)) * 12

                curCarTax =  (initalCarTax - yearDiscount) + distanceCost
                totalTaxes += curCarTax
                console.log(`A ${type} car will pay ${curCarTax.toFixed(2)} euros in taxes.`);
                break;

            case 'heavyDuty':
                initalCarTax = 80;
                yearDiscount = 8 * years;
                distanceCost = (Math.floor(kilos / 9000)) * 14

                curCarTax =  (initalCarTax - yearDiscount) + distanceCost
                totalTaxes += curCarTax
                console.log(`A ${type} car will pay ${curCarTax.toFixed(2)} euros in taxes.`)
                break;

            case 'sports':
                initalCarTax = 100;
                yearDiscount = 9 * years;
                distanceCost = (Math.floor(kilos / 2000)) * 18

                curCarTax =  (initalCarTax - yearDiscount) + distanceCost
                totalTaxes += curCarTax
                console.log(`A ${type} car will pay ${curCarTax.toFixed(2)} euros in taxes.`)
                break;

            default:
                console.log(`Invalid car type.`);
                break;
        }
    }
    console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`);
}
taxCalc(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])