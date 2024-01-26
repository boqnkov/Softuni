class Person {
    constructor(name, age) {
        this.name = name;
        this.ages = age
    }

    sayHello() {
        console.log(`${this.name} says Hello`);
    }
}
let myPerson = new Person('Ivan', 22)
console.log(myPerson)
myPerson.sayHello()

// function solve(arr) {

//     class Cat {
//         name;
//         age;
//         constructor(name, age) {
//             this.name = name;
//             this.age = age
//         }

//         meow(){
//             console.log(`${this.name} ${this.age} says Meow`);
//         }
//     }

//     for (let cats of arr){
//         let [name, age] = cats.split(' ')
//         let cat = new Cat(name,age)
    
//         cat.meow()
//     }
// }

// solve(['Mellow 2', 'Tom 5'])