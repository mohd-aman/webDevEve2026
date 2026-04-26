//import fs module
const fs = require("fs");

// console.log("start");

// //read f1.txt file 
// // it's blocking main thread until and unless file reading is done 
// const f1Data = fs.readFileSync("f1.txt");

// console.log("f1 Data " + f1Data,);

// console.log("end");


console.log("start");
fs.readFile("f1.txt",function(error,data1){
    console.log("f1 Data " + data1);
})
fs.readFile("f2.txt",function(error,data2){
    console.log("f2 data " + data2);
})
fs.readFile("f3.txt",function(error,data3){
    console.log("f3 Data " + data3);
})
console.log("end");