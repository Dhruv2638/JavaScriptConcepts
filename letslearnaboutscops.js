// // for loop code using javascript
// // some pattern printing questions in javascript

// function pattern(n) {
//     for(let i = 0; i < n; i++) {
//         let stars = "";
//         for(let j = 0; j < i; j++) {
//             stars += '* ';
//         }
//         console.log(stars);
//     }
// }

// pattern(5);
// console.log();
// pattern(3);


// There are functions that take another function as arguments these are call higher order function


// function f(x, fn) {
//     console.log(x);
//     fn();
// }

// f(10, function exe() {
//     console.log("This is higher order function");
// })

// let arr = [1, 10, 9, 100, 11, 23];

// arr.sort(function(a, b) {
//     return ((a < b) ? a : b);
// }); // it sorts the given array
// // sort array in incresing 
// console.log(arr);

// // let talks about call backs 


// function fun(x, fn) {
//     console.log(x);
//     fn();
// }

// fun(10, function ex() {
//     console.log("you know");
// })


// // function called as callback funtion we are making
// setTimeout(function exex() {
//     console.log("Running after some time");
// }, 4000);


// problems in call back hell -> readibilty issue
// Inversion of controle
// let arr = [5, 1, 20, 90, 55];
// arr.sort(function cmp(a, b) {
//     return a - b;
// });
// console.log(arr);

// Now we will learn about Async JS
// What is nature of javascript 
// 1) javascript is syncronus in nature -> if we execute valid ecmascript code 
// 2) javascript is single threded
// console.log("we are starting");
// setTimeout(function () {
//     console.log("Time is Done");
// }, 5000);
// console.log("it's done first");
// Runtime 

// How we are not able to javaScript 
// Node is Runtime of Javascript 


function suteItWillTakeTime() {
    console.log("Loop is starting");
    for(let i = 0; i < 10000000000; i++) {
        // some task we are doing here
    }
}
// javascript native code will be taking time
// we will never pause Native peace of code javascript never quite in between of native code
// Event queue takes any remaining code will that we are not able to complete due to native code

console.log("HI");


console.log("By");
