function barIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^\|$%\.]*<(?<product>\w+)>[^\|$%\.]*\|(?<count>\d+)\|[^\|$%\.]*?(?<price>\d+\.?\d*)\$/

    let command = input.shift();

    let totalPrice = 0;

    while (command != 'end of shift') {

        let match = command.match(pattern);

        if (match) {
            
            let {name, product, count, price} = match.groups

            let curPrice = Number(count) * Number(price);
            totalPrice += curPrice;

            console.log(`${name}: ${product} - ${curPrice.toFixed(2)}`);

        }


        command = input.shift()

    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
)