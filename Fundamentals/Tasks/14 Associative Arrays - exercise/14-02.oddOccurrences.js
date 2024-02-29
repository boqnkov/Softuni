function oddOccurrences(input) {
    let string = input.toLowerCase();
    let arr = string.split(' ');

    let elements = {};

    
    for (let element of arr) {
        if (element in elements) {
            elements[element] += 1
        } else {
            elements[element] = 1
        }
    }

    let entries = Object.entries(elements)
    let output =[];

    for (let [element, count] of entries){
        if (count % 2 !== 0) {
            output.push(element)
        }
    }
    console.log(output.join(' '));



}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')