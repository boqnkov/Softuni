function rounding(num,precision) {
   
    if (precision>15){
        precision = 15
    }
    let i = parseFloat(num.toFixed(precision))
    console.log(i);

}
rounding(3.5,10)