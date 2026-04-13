class Pizza {
    static totalPizzasMade = 0; //static property to keep count;

    constructor(toppings,size,crustType){
        this.toppings = toppings //{toppings:['cheese','veggies']};
        this.size = size //{toppings:['cheese','veggies'],
                                        // size: 'large'
        this.crustType = crustType      // crustType:'thin'     
                                        // }
        Pizza.totalPizzasMade++;
    }

    describe(){
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
    }

    //static method
    static calculateTotalPizzasMade(){
        console.log(`Total pizzas made: ${Pizza.totalPizzasMade}`);
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

Pizza.calculateTotalPizzasMade();
const pizza1 = new Pizza(['cheese','veggies'],'large','thin');
Pizza.calculateTotalPizzasMade();
const pizza2 = new Pizza(['cheese','chillies'],'medium','thick')
console.log(pizza2);
Pizza.calculateTotalPizzasMade();
const stuffedPizza = new StuffedCrustPizza(["cheese","pepperoni"],'medium','thin',"Cheese and Garlic");
Pizza.calculateTotalPizzasMade();

StuffedCrustPizza.calculateTotalPizzasMade();