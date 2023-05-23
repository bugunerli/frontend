import { sayHelloTo, addNumbers } from "./practice11_methods.js";

import chalk from 'chalk';

import Person from "./practice12_person.js";

sayHelloTo('John'); // Hello user John
sayHelloTo('Marina'); // Hello user Marina

console.log(addNumbers(100, 200)); // 300


console.log(chalk.blue('Hello world!'));

const p1 = new Person("Dua", "D");
p1.printFullName;
// p1.age = 17;
// console.log(p1);// Person { firstName: 'Dua', lastName: 'D', age: 17 }






