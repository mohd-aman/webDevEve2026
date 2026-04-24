let numOne = 10;
let numTwo = numOne;
numOne = 20;
console.log(numOne);
console.log(numTwo);

let object1 = {
    name:"Alex",
    age:18
};

let object2 = object1;

//update object1 

object1.age = 50;
console.log(object1.age);
console.log(object2.age);


let object3 = {
    name:"Alex",
    age:18
}

object1.age = 100;

console.log(object1.age);
console.log(object3.age);