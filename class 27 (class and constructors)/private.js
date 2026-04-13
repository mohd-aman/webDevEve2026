class Pizza {
    static totalPizzasMade = 0; //static property to keep count;
    #toppings; //private property
    #size; // private property
    #crustType;//private property
    constructor(toppings,size,crustType){
        this.#toppings = toppings //{toppings:['cheese','veggies']};
        this.#size = size //{toppings:['cheese','veggies'],
                                        // size: 'large'
        this.#crustType = crustType      // crustType:'thin'     
                                        // }
        Pizza.totalPizzasMade++;
    }

    describe(){
        console.log(`A ${this.#size} pizza with ${this.#toppings.join(", ")} on a ${this.#crustType} crust.`);
    }

    //static method
    static calculateTotalPizzasMade(){
        console.log(`Total pizzas made: ${Pizza.totalPizzasMade}`);
    }

}

const pizza1 = new Pizza(['cheese','veggies'],'large','thin');
pizza1.describe();
