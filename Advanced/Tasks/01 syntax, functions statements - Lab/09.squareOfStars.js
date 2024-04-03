function square(input) {
    let result = ''

    for (let i = 1; i<=input; i++){
        result = '* '.repeat(input)
        console.log(result);
    }
}
square(8)