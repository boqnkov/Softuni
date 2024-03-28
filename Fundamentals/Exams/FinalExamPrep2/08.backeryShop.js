function bakeryShop(input) {

    let shopInfo = {};

    let command = input.shift();

    let action = command.shift()

    let soldGoods = 0

    while (action != 'Complete') {

        let [qty, food] = command.split(' ')
        qty = Number(qty)

        if (action == 'Receive') {

            if (qty > 0) {
                shopInfo[food] = qty
            }

        } else if (action == 'Sell') {

            if (!(food in shopInfo)) {
                console.log(`You do not have any ${food}.`);

            } else {

                if (qty > shopInfo[food]) {
                    console.log(`There aren't enough ${food}. You sold the last ${shopInfo[food]} of them.`);
                    soldGoods += shopInfo[food]
                    delete shopInfo[food]
                } else {
                    shopInfo[food] -= qty
                    console.log(`You sold ${qty} ${food}.`);
                    soldGoods += qty

                    if (shopInfo[food] == 0) {
                        delete shopInfo[food]
                    }
                }
            }
        }

        command = input.shift()
    }

    let entries = Object.entries(shopInfo)

    entries.forEach((arr) => console.log(`${arr[0]}: ${arr[1]}`))
    console.log(`All sold: ${soldGoods} goods`);

}
bakeryShop(['Receive 105 cookies',
    'Receive 10 donuts',
    'Sell 10 donuts',
    'Sell 1 bread',
    'Complete'
])