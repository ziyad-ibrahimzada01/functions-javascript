// function Persons(name, age, height, salary, position) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.salary = salary;
//     this.position = position;
// }
// let person1 = new Persons("Ali", 30, 165, 50000, "Engineer");
// let person2 = new Persons("Ziyad", 17, 173, 70000, "Developer");
// let person3 = new Persons("Elnur", 21, 180, 55000, "Doctor");
// console.log(person1, person2, person3);




// let checkNumber = (number) => {
//     number % 2 === 0 ? console.log(number) : alert(number);
// };
// checkNumber(4); 
// checkNumber(7); 




// let reverseFibonacci = (x, y, n) => {
//     if (n === 0) return [];
//     let rest = reverseFibonacci(y, x - y, n - 1);
//     return [x, ...rest];
// };

// let reverseFib = (n) => {
//     return reverseFibonacci(1597, 987, n);
// };
// console.log(reverseFib(20));




// let multiplyByTen = (number) => number * 10;

// let checkOddNumber = (number) => {
//     if (number % 2 !== 0) {
//         alert(number);
//     }
// };
// let number = 5.5;
// let result = multiplyByTen(number);
// checkOddNumber(result);