//impure function
// let c = 30;

// function sum(a,b){
//     const add = a+b+c;
//     c=c+1; // mutating/updating variable outside of it's scope
//     return add;
// }
// //if output is different for same input invocation then the function is impure
// console.log(sum(10,20));
// console.log(sum(10,20));
// console.log(sum(10,20));
// console.log(sum(10,20));

//pure function
function sum(a,b){
    return a+b;
}

console.log(sum(10,20));
console.log(sum(10,20));
console.log(sum(10,20));
console.log(sum(10,20));