function oddOccurrences(input) {
    let string = input.toLowerCase();
    let arr = string.split(' ');

    let object = {};

    for (let element of arr) {
        if (!(element in object)) {
            object[element] = 1
        } else {
            object[element]++
        }
    }

    let entries = Object.entries(object)
        .sort((a, b) => b[1] - a[1])
        .filter(a => a[1] % 2 != 0)

    let result = []
    entries.forEach(el => result.push(el[0]))
    console.log(result.join(' '));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')