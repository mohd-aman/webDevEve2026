var num = 100;
num = 200;
num = false;
var num = 500;// re declaration

console.log(num);
var num2; // declaring 

num2 = 300;// updating later allowed

var str = "I am a string";

var ch = "a"

var flag = true;

let d = "I'm also fine";

d = "I'm mutated/updated" // update 

// let d= "Im updated again" // can't re declare

let e; 
e="later value updated" // allowed

const pi = 3.14
// // pi = 3.15 // update not allowed in const 
// // const pi = 3.5 // re declaration not allowed

// // const n;// not allowed, in case of const, 
// // // we need to initialize at the time of declaration
// n=5;

// Dynamically typed language 


//      Re-declaration	Re-Initialization
// var	    Yes	            Yes
// let	    No	            Yes
// const	No	            No