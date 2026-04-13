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

class StuffedCrustPizza extends Pizza {
  constructor(toppings, size, crustType, stuffingType) {
    super(toppings, size, crustType); //invoking parent constructor method
    this.stuffingType = stuffingType;
  }

  describeStuffing() {
    console.log(`This pizza has ${this.stuffingType} stuffing in the crust.`);
  }

  //overriding parent method
  describe(){
    super.describe();//invoke the describe method from parent class;
    this.describeStuffing();//additional description for the stuffing;
  }

}


const stuffedCustomer1 = new StuffedCrustPizza(["cheese","pepperoni"],'medium','thin',"Cheese and Garlic");
console.log(stuffedCustomer1);
stuffedCustomer1.describe();

// const customerOrder1 = new Pizza(["cheese","pepperoni"],'medium','thin');
// customerOrder1.describe();
// const customerOrder2 = new Pizza(['veggies','cheese'],'large','thick');
// customerOrder2.describe();