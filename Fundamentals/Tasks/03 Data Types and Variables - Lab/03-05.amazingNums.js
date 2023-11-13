function amazingNums(number) {

    let result = 0;
    let numberAsString = String(number)
    for (let i = 0; i < numberAsString.length; i++) {
        result += Number(numberAsString[i]);
    }
    result = String(result)

    isAmazing = result.includes('9')

    console.log(isAmazing ? `${number} Amazing? True` : `${number} Amazing? False`);

}
amazingNums(1233)
amazingNums(999)