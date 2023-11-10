function basketEquip(input) {

    let sneakersPrice = Number(input[0]) - Number(input[0] * 0.4);
    let equipPrice = sneakersPrice - sneakersPrice * 0.2;
    let ballPrice = equipPrice * 0.25;
    let accessoriesPrice = ballPrice * 0.2

    let finalPrice = Number(input[0]) + sneakersPrice + equipPrice + ballPrice + accessoriesPrice;

    console.log(finalPrice);


}
basketEquip([365])