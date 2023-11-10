function isValidNumber(input) {

    let num = Number(input[0]);
    isValid = (num>=100 && num<=200 || num==0);

    if (!isValid) {
        console.log('invalid');
    } 

}
isValidNumber(["150"])