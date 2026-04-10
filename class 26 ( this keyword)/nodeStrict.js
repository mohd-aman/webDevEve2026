"use strict"

console.log("Scenario 1 : ");
console.log(this); //{}

console.log("Scenario 2 : ");

function func (){
    console.log(this);
}
func();

const obj = {
    name : "Mike",
    fn:function(){
        console.log(this);
    }
}

obj.fn();
const objFn = obj.fn;
objFn();


const obj2 = {
    name:"Nested",
    fn:function(){
        console.log("Outer Fxn");
        console.log(this);
        const nestedFunc = function(){
            console.log('Inner Fxn')
            console.log(this);
        }
        nestedFunc();
    }
}

obj2.fn();
const obj2Fn = obj2.fn;
obj2Fn();