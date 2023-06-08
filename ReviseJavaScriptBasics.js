// Basic of Javascript 

// console.log("We are able to make Javascript run");

// There are 3 ways to create variables in Javascript

// 1) using var keyword
var playerName = 10;

// 2) using let keyword
let playerScore = `DhruvKumar Nagar`;

// 3) using const keyword
const x = 100;

// There are also some naming convention we have to use make sure that everything works fine. we can use keywords and also we can't name anything 

// console.log(10);

// DataTypes in Javascript

// 1) Numbers -> 3, -2, 100, 3.14/
// 2) Strings -> Any random text in "", '', ``
// 3) Boolean -> we can only store True/False
// 4) Undefined -> something is not defined yet but might defined in feature 
// 5) Objects -> If we have to store {key, value} pairs we can use object
// 6) Null -> It actually Represents Empty value.

const name = 'DhruvKumar Nagar';
console.log(playerScore);

var age;
var newName = undefined;

// Now we will talk about special Characters
console.log("Dhruv is best Code in The \t World");

// Opeartors in Javascript 

if(x >= 3 || ~true) {
    console.log("yes x is greater than 3");
}

// What value are considered falsy in javascript

// NULL, Undefined, empty string(''), NaN, false, +0, -0, 0 -> false
// Apart from this all the values are positive

// coersion -> Type interconversion
console.log(10 && 6);

// What is singnificance of -0
// -> If we want to represent direcation we have to also get access -0. In some games we are having this -0 used.

// NaN -> Not A Number
// -> If we want to return Invalid Number. Means if number is not present then we have to return NaN. lot of we use -1 but -1 also can be valid Index.
// -> which is the only number in javascript that it is not equal to itself is NaN

// Bitwise Operators
// -> works on bits of perticular number 

// Equlity Operators
// -> == -> abstract equlity operator
// -> === -> strict equlity operator

// -> The mejor thing '==' does the type conversion and '===' does not perform type conversion

// if(1 == '1') {
//     console.log("Wow, this is the same case");
// }

// console.log(typeof(null));

// Function are useful in every language Javascript have some new ways to create function let's check

function printBest() {
    console.log("Dhruv is best code is the world!");
}
printBest();

// Why we have to return from function we can also use console.log()

// console.log -> return undefined

let c = console.log("Dhruv");
console.log(c);

