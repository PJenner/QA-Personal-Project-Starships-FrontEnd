"use strict";

let g = 1;

console.log(g);

let darthVader = {
    allegiance: "Empire",
    weapon: "Lightsaber",
    sith: true
};

console.log(darthVader);
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is the ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);


let myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push("this is cool", 1, true);
console.log(myArray.length);
myArray.shift(2);
console.log("start");
for (let eachElement of myArray) {
    console.log(eachElement);
}


const person = {
    first: 'Chris',
    last: 'Perrins',
    country: 'UK',
    city: 'Manchester',
};
let { first, last } = person;
console.log(`My name is ${first} ${last}`);
//output: My name is Chris Perrins

function doSomething() {
    let a = 1;
    console.log(a);
    console.log(foo());

    function foo() {
        return 2;
    }
}
doSomething();

function subcal(num1, num2) {
    return num1 - num2;
}

console.log(subcal(100, 1));

function welcome(name, age, gender) {
    return console.log(`My name is ${name}, I am ${age} and of gender ${gender}`);
}

welcome("Andrew", 12, "male")

let powerUp = (num1, num2) => Math.pow(num1, num2);

console.log(powerUp(2, 3));