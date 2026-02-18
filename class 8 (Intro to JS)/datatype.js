//Primitive Data type

//Numbers
// let a = 20;
// let b = 10000000;
// let c = 20.053;
// let d = -2343;

// let e = 12/0; // Infinity
// console.log(e);

// let f = "Hello world"/0;//NaN
// console.log(f);

// //strings
// let str = 'JavaScript a';
// let str2 = "Hello world";
// let char = 'ch';
// let str3 = `I am also ${a} string`; //backtick

// let str4 = "I am also " + a + " string";

// console.log(str);
// console.log(str3);
// console.log(str4);

//Boolean

// let isEven = true;
// let isOdd = false;

//undefined;
// let a; // declared a variable and no Initialization
// console.log(a);
// // console.log(z); not defined and it's an error;

// //null
// let b = null;
// console.log(b);


// While both null and undefined represent "no value", 
// the choice between them is not interchangeable.
//  undefined is used when a value has not been assigned and is the default state,
//   while null is used to explicitly denote a null or "empty" value.


// Referance data types

//function

// function serveBeverage(drink){
//     //go to disposal, take glass
//     // go to machine, fill it
//     // go to customer, serve it
//     console.log(drink);
// }

// serveBeverage("Coffee");
// serveBeverage("Tea")


//Arrays;

let arr = [1,"Scaler",true,undefined,null,[1,24,6,6],function(){}]
console.log(arr);

console.log(arr[1]);
arr[0] = "New value udpated";
arr[1] = 700;
console.log(arr);
console.log(arr[10]);

//length of Array
console.log(arr.length);

let cars = ['swift', 'BMW', 'Audi'];

//to add element at end;
cars.push("porsche")
console.log(cars);

//remove element from end;
cars.pop();
console.log(cars);

//to add element at the start;
cars.unshift("Urus");
console.log(cars);

//to remove from the start;
cars.shift();
console.log(cars);
