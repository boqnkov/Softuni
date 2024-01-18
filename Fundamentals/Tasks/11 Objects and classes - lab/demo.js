
let peter = {
    fisrstName: 'Peter',
    lastName: 'Petkov',
    age: 20
}

function printDetails(person) {
    person.age = 21
    person.hair = 'brown'
    console.log(person);
}
printDetails(peter);



