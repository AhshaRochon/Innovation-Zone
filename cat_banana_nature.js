// Innovation Zone - JavaScript Code Library

// 1. Variables & Data Types
let name = "John";
let age = 25;
let isCool = true;
const pi = 3.14;

// 2. Strings
let greeting = "Hello, my name is " + name + ". I am " + age + " years old.";

// 3. Numbers
let num1 = 28; 
let num2 = 8;
let sum = num1 + num2;

// 4. Logging
console.log("The sum of num1 & num2 is", sum);

// 5. Arrays
let colors = ["blue", "green", "red"];
console.log(colors[1]);

// 6. Objects
let car = {
    make: "Honda",
    model: "Civic",
    year: 2010
};

// 7. Loops
for(let i = 0; i < 10; i++){
    console.log(i);
}

// 8. If Statements
if(age >= 18){
    console.log("You are an adult!");
} else {
    console.log("You are a minor!");
}

// 9. Switch Statements
switch(car.make){
    case "Toyota":
        console.log("Toyota");
        break;
    case "Honda":
        console.log("Honda");
        break;
    default:
        console.log("I don't know");
};

// 10. Functions
function sumNums(num1, num2){
    let result = num1 + num2;
    return result;
}

let newSum = sumNums(num1, num2);
console.log(newSum);

// 11. Objects & Arrays
let user = {
    username: "JohnDoe",
    email: "jdoe@example.com",
    hobbies: ["sports", "music"],
    address: {
        street: "123 Main St.",
        city: "New York",
        zipcode: 10005
    }
};

// 12. Date & Time
let today = new Date();
let year = today.getFullYear();

// 13. DOM Manipulation
let h1 = document.getElementById("main-title");
h1.style.color = "blue";

// 14. Events
let btn = document.getElementById("click-me");
btn.addEventListener("click", function(){
    alert("You clicked me!");
});

// 15. Math
let randomNum = Math.floor(Math.random() * 10) + 1;

// 16. Iterators
let people = ["John", "Greg", "Jessica"];
people.forEach(function(person){
    console.log(person);
});

// 17. Nested Loops
let arr = [[1,2], [3,4], [5,6]];
arr.forEach(function(subArr){
    subArr.forEach(function(num){
        console.log(num);
    });
});

// 18. try...catch
try {
    num.toUpperCase(); // num is undefined
} catch(e){
    console.log(e);
}

// 19. Classes
class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let myCar = new Car("Honda", "Civic", 2010);
console.log(myCar);

// 20. Spread Operators
let array1 = [1,2,3];
let array2 = [4,5,6];
let newArray = [...array1, ...array2];
console.log(newArray);

// 21. Rest Parameters
function addNumbers(...nums){
    let result = 0;
    nums.forEach(function(num){
        result += num;
    });
    return result;
}

let sum = addNumbers(1,2,3,4,5,6);
console.log(sum);

// 22. Maps
let numbers = [1,2,3,4,5];
let doubleNumbers = numbers.map(function(num){
    return num * 2;
});

console.log(doubleNumbers);

// 23. Sets
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet.has(2)); // true

// 24. Promises
let myPromise = new Promise(function(resolve, reject){
    let success = false;

    if(success){
        resolve("The promise was resolved");
    } else {
        reject("The promise was rejected");
    }
});

myPromise
    .then(function(msg){
        console.log("Success:", msg);
    })
    .catch(function(err){
        console.log("Error:", err);
    });

// 25. Generators
function* makeNumberIterator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let numIterator = makeNumberIterator();
console.log(numIterator.next().value); // 1
console.log(numIterator.next().value); // 2

// 26. Classes & Inheritance
class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    eat(){
        console.log(`${this.name} eats food.`);
    }
}

class Dog extends Animal {
    bark(){
        console.log(`${this.name} barks.`);
    }
}

let myDog = new Dog("Fido", "Dog");
myDog.eat();
myDog.bark();

// 27. Maps & Sets
let myMap = new Map();
myMap.set(1, "John");
myMap.set(2, "Doe");

myMap.forEach(function(val, key){
    console.log(`${key} ${val}`);
});

// 28. Modules
import { sum, subtract } from './math.js';

let result1 = sum(1,2);
let result2 = subtract(4,2);

console.log(result1, result2);

// 29. Async Programming
async function getUsers(){
    let response = await fetch('http://example.com/users');
    let data = await response.json();
    console.log(data);
}

getUsers();

// 30. Promises with Async/Await
async function getData(){
    let response = await fetch('http://example.com/data');
    let data = await response.json();

    let promise = new Promise(function(resolve, reject){
        if(data.value > 10){
            resolve('greater than 10');
        } else {
            reject('less than 10');
        }
    });

    let result = await promise;
    console.log(result);
}

getData();