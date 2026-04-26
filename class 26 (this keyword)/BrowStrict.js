"use strict"

console.log("Scenario 1 : ");
console.log(this); //window

console.log("Scenario 2 : ");

function func(){
    console.log(this); // undefined;
}
func();

const obj = {
    name : "Mike",
    fn:function(){
        console.log(this);
    }
}

obj.fn(); // object mike
const objFn = obj.fn;
objFn(); // undefined

const obj2 = {
    name:"let's have fun",
    fn:function(){
        console.log("outer fxn");
        console.log(this);
        const nested = function(){
            console.log("Inner fxn");
            console.log(this);
        }
        nested();
        this.fn2();
    },
    fn2:function(){
        console.log("fn 2");
        console.log(this);
    }
}

obj2.fn();
const obj2Fn = obj2.fn;
obj2Fn();