function schoolMath(input) {

    let penPrice = Number(input[0]) * 5.8;
    let markPrice = Number(input[1]) * 7.2;
    let chemPrice = Number(input[2]) * 1.2;
    
    let finalPrice = (penPrice + markPrice + chemPrice) - (Number(input[3])/100*(penPrice + markPrice + chemPrice));

    console.log(finalPrice);

}
schoolMath(["2","3","4","25"]);