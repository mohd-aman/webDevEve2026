//q1 What happens if you manually set an object’s __proto__ property to null? How would you access the object's original prototype after doing this
// const obj = {name:"Sample Object"}
// console.log(obj);

// console.log(obj.toString());

// obj.__proto__ = null;

// try {
//     console.log(obj.toString());  // This will throw an error
// } catch (e) {
//     console.log("Error:", e.message);
// }


//q2 Examine the following code. What does this code output and why? What would be a better way to ensure Dog.prototype.constructor is set correctly?
// function Animal() {

// }

// Animal.prototype.speak = function () {
//   console.log("Sound!");
// };
// console.log(Animal.prototype);
// // animal prototype {
// //     speak:f(){'sound'}
// //     constructor: ƒ Animal()
// //}

// function Dog() {

// }

// console.log(Dog.prototype);

// // dog prototype - { constructor:f Dog }

// Dog.prototype = Object.create(Animal.prototype);
//         //{} object having a prototype which is animal prototype
//                     //{
//                     //     speak:f(){'sound'}
//                     //     constructor: ƒ Animal()
//                     //}
// console.log(Dog.prototype);
// const dog = new Dog();
// Dog.prototype.constructor = Dog; //correct way;
// console.log(dog.constructor.name);



//q3. ciruclar prototype
function A(){

}

function B(){

}

let a = new A();
let b = new B();

A.prototype = b ;

try{
    B.prototype = a ;
}catch(error){
    console.log("Error: ",error.message); //Throws TypeError in most JS environments
}

//which could lead to performance issues or crashes.




//q5. Consider the following code snippet. What is the output of each console.log statement and why?

function Cat(name) {
  this.name = name;
}
const fluffy = new Cat("Fluffy");
fluffy.__proto__ = { age: 5 };

console.log(fluffy.age);
console.log(fluffy.hasOwnProperty('age'));
console.log(fluffy.__proto__ === Cat.prototype);