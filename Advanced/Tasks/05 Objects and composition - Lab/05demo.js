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

person2.sayHello()