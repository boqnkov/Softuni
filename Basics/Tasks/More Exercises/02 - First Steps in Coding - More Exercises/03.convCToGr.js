function convCToFahr(input) {

    let C = Number(input[0]);
    let fahr = (C * 1.8) + 32;
    let result = fahr.toFixed(2);

    console.log(result);

}
convCToFahr(["-5.5"]);