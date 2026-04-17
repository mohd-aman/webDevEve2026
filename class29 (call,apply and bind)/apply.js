const person1 = {
    name:"John Snow",
    age:30,
    describe:function(location,gender){
        console.log(`My name is ${this.name} and I am ${this.age} years old, lives in ${location}`);
        console.log(gender)
    }
}

const person2 = {
    name:"Mark",
    age:35,
}

person1.describe("Walls","Male");

//person1.describe - function
person1.describe.apply(person2,["Delhi","N/A"]); //invoke function right away

// why apply is needed 

const arr = [5,6,7,8,3,4,6]
//2. 3,4,6,7,8,4,5

// if you have dynamic array and you need to find out max out of it
// const m = Math.max(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]);
const m = Math.max.apply(null,arr);
console.log(m);