// promises are solutios for inversion of control

// 1) How we can create promises?
// 2) How we can consume promises?
// There are two things promises can also be broken or fullfilled 

// promises contructer -> we can create new promise constructer
// At the time when the constoctuer generates a new promise 
// now we will create 

setTimeout(() => {
    console.log("This is done.");
}, 3000);


// p.then(fullfillementhandler, rejectionhandler);
// this are handler fucntions and inside this functions we have to implement our selfs 
let i = 10;
function createPromise() {
    return new Promise(function exe(resolve, reject){
        if(i % 2 == 0) {
            resolve(i);
        }else {
            reject(i);
        }
    });
};

console.log()