// class MyClass{
//     constructor(){
//         //initialize the properties
//     }

//     myMethod(){
//         //method implemention
//     }

//     static myStaticMethod(){

//     }
// }


class Pizza{
    constructor(toppings,size,crustType){
        this.toppings = toppings;
        this.size = size;
        this.crustType = crustType;
    }

    describe(){
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
    }
}

const customerOrder1 = new Pizza(["cheese","pepperoni"],'medium','thin');
customerOrder1.describe();
const customerOrder2 = new Pizza(['veggies','cheese'],'large','thick');
customerOrder2.describe();