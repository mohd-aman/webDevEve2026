function Pizza(toppings,size,crustType){
    // console.log(this); //{} it is newly empty object for each invocation of construction fxn(Pizza);
    this.brand = "Dominos";
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;

    this.describe = function(){
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
    }
}

const customerOrder1 = new Pizza(["cheese","pepperoni"],'medium','thin');
customerOrder1.describe();
// console.log(customerOrder1);
const customerOrder2 = new Pizza(['veggies','cheese'],'large','thick');
// console.log(customerOrder2);
customerOrder2.describe();