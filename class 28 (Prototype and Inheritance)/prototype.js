const person = {
    name:"John"
}

console.log(person); //let's in browser


// console.log(person.hasOwnProperty('name'));//true

// console.log(person.hasOwnProperty('age'));//false

// const arr = [1,2,3,4,5,6,7]; 
// console.log(arr);
// console.log(arr.length);
// const filteredArr = arr.filter((ele)=>ele%2);

// console.log(filteredArr);

function Car(model,year){
    this.model = model;
    this.year = year;
    
    // method defined inside the constructor
    // this.displayInfo = function(){
    //     return `This is a ${this.year} ${this.model}.`;
    // }
}

// console.log(Car.prototype);
console.log(Car.prototype.__proto__);

// Car.prototype.displayInfo = function () {
//   return `This is a ${this.year} ${this.model}.`;
// };

//// Setting a generic method via __proto__  Not recommended at all
Car.prototype.__proto__.displayInfo = function(){
    return `This is a ${this.year} ${this.model}.`;
}

console.log(person.displayInfo);

const car1 = new Car('Toyota Camry', 2026 );
const car2 = new Car('Ford Mustang', 2023);

console.log(car1);
console.log(car2);
console.log(car1.model);
console.log(car1.price);
const a = car1.displayInfo();
console.log(a);
console.log(a.hasOwnProperty);
const b = car2.displayInfo();
console.log(b);