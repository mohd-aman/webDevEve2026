const person1 = {
    name:"John",
    age:25,
    printNameAndAge:function(location,gender){
        console.log(this);
        console.log(`My name is ${this.name} and I am ${this.age} years old, and live in ${location}`)
        console.log(gender);
    }
}
const person2 = {
    name:"Mark",
    age:35,
    location:"Delhi"
}

person1.printNameAndAge("Delhi","N/A"); //method invocation
// person2.printNameAndAge();//? error as key does not exist


// to borrow function
person1.printNameAndAge.call(person2,"Delhi","Male"); //invokes right away

// func.call() // why - prototype of Function
// arr.filter()//why - due to prototype of Array 
// obj.hasOwnProperty()// why - due to prototype of Object