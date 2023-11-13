function echoType(input) {

    let dataType = typeof input;
    if (dataType == 'string' || dataType == 'number') {
        console.log(dataType);
        console.log(input);
    } else {
        console.log(typeof input);
        console.log('Parameter is not suitable for printing');
    }

}
echoType('Hello, JavaScript!')