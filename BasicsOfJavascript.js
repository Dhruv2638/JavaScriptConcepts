// var user = {
//     name : "Dhruv",
//     company : "Motorola Solutions Inc",
//     package : "24",
//     "Tachstack" : {
//        frontEnd : "React",
//        backEnd : "Nodejs",
//        DataBase : 1 - undefined
//     },
// };
// console.log(user);
// Special Charcters -- there are some special characters we can use to make keyboard special charcters make possible
// console.log("The new iphone is launched and Price is \t1,40,000");
// comments are very important as real life software engineer
// comments are peice of code that's is for documentation purpose
/* multilne 
comment */
// Now we can use single line comment
// console.log("WE can use now code.");

// Now we learn operators
// 1) Arethimetic operations -> +, -, /, *, %
// let a = 20, b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a % b);
// console.log(a ** b);

// 2) assignment operations -> =, +=, -=, *=, /=, %=
// let x = null;
// console.log(x-=5);  

// 3) Relation operators >, <, <=, >=
// this values are boolean valuse means if it is true then 1 and false then 0
// console.log(NaN == null);

// 4) Logical operators -> not, and, or, xor
// AND -> if both inputs have current passing then as output there will current
// OR -> if one of the inputes have current passing on that then outptut will have current
// XOR -> If both inputs have diffrent then current will be passing through output 
// NOT -> I will be doing opsite of input we are having
// console.log(true && false);
// console.log(false || true);
// console.log(!false);

// Short curciting -> is simple concept how we have to check first and second operations in conditions 
// Means if in AND if first input is false then no need to check the second input we can direclty return from that
// Means in OR if first input is true then no need to check the second input we can directly return true
// what values are falsy in javascript null, +0, -0, NaN, undefined, empty string("") rest any things in javascript will true
// coercion (type interconversion OR implict type casting)
// console.log(5 && 10);
// console.log(0 || 6);

// Javascript has three numbers 0, -0, NaN
// what we need -0 in any case there are many game devolpment and some senarios we are using magnitude and direction then use simple case when velocity beacomes 0 on which direction person is facing then we can use -0
// NaN -> Not a Number => if there is situation when we have to return number but we are not able to return any valid number then we can return NaN.

// Now we will see what is bitwise operators we already know about bitwise operator we are GOAT 
// == first is this equality operator know as abstract operator -> its checks the type of both operands and 
// === is known as strict equality operator

// let's talk about condition in Javascript as you might know because you already know other languages 
// but let's do revision together

// In real life we are take so much decisions now and then like i can give example like if syam told that we are not giving you offer then we can do 5 test case per day or if it will be giving you offer then we can do like some 10 test cases per day

// if(-0 == 0) {
//     console.log("Name is correct");
// }
// // if in any case value is not boolean then it will try to convert in boolean
// let n = 5;
// if(n & 1 == 1) {
//     console.log(n, "is ODD number");
// }else {
//     console.log(n, "is EVEN number")
// }

// var minValue = prompt("Can you give some number : ");
// console.log(minValue);

// Now, we dhruv we will study about loops 
// In real life we are doing something repetetlvily and then in real life we call at decipline in programming we use some other loops like for, while, do-while and for each loop 

// write a basic program to print numbers from 1 to 10
// for(let i = 1; i <= 100; i++) {
//     console.log("i: ", i);
// }
// let i = 1;
// while(i <= 1000) {
//     console.log("i: ", i);
//     i++;
// }
// let i = 1;
// do{
//     console.log("i: ", i);
//     i++;
// }while(i <= 1000);

// First thing to do in the life buy the course 
// Sum of first n natural numbers
// let i = 20;
// while(i > 0) {
//     console.log("i: ", i);
//     i--;
// }

// Now we dhruv we will study about introduciton to backend devlopment


// Date : 1/10/2023 live class coercion ToNumber, ToString and ToBoolean
// if(undefined) {
//     console.log("Makes sense");
// }else console.log("Not making sense");
// console.log(false == null);
// console.log([6, 1] - 1);
// console.log(`My object is ${50}`);
// let x = -0;
// if(x == 0 && x < 0) console.log("True");
// else console.log("false");
// console.log((10).toString());

// Now we dhruv we learn about scops
