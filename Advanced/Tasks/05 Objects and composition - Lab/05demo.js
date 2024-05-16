function sayHello() {
    console.log(`Hello, my name is ${this.name}`);
}

const person = {
    name: 'Jon',
    age: 32,
    sayHello
}

const person2 = {
    name : 'Ani',
    age: 33,
    sayHello
}

const fs = require('fs');


person2.sayHello()

const personAsString = JSON.stringify(person)
console.log(typeof personAsString);
console.log(personAsString)

const json = '{"name":"Peter", "age": 28}';
const parsed = JSON.parse(json)
console.log('---------');
console.log(typeof json);
console.log(json);


fs.writeFileSync('./data.json', personAsString)