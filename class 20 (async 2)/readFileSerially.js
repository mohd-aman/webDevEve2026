const fs = require('fs');

const promisifiedReadFile = fs.promises.readFile('f1.txt');

console.log(promisifiedReadFile);

promisifiedReadFile.then(function(result){
    console.log("Data of file 1 " + result);
    return fs.promises.readFile('f2.txt');
}).then(function(result){
    console.log("Data of file 2 " + result);
    return fs.promises.readFile('f3.txt');
}).then(function(result){
    console.log("Data of file 3 " + result);
})


//can we start reading files at the same time all three


const f1Promise = fs.promises.readFile('f1.txt');
const f2Promise = fs.promises.readFile('f2.txt');
const f3Promise = fs.promises.readFile('f3.txt');

f1Promise.then(function(result){
    console.log("Data of file 1 " + result);
})

f2Promise.then(function(result){
    console.log("Data of file 2 " + result);
})

f3Promise.then(function(result){
    console.log("Data of file 3 " + result);
})