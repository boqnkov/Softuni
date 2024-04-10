function upperCase(string) {
    string = string.toUpperCase()
    const pattern = /\w+/g

    const array = string.match(pattern)

    const result = array.join(', ')
    console.log(result);
}
upperCase('Hi, how are you?')