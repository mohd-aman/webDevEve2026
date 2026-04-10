function add(a,b){
    return a+b;
}

const sum = add(10,30);
console.log(sum);


const addArrow = (a,b)=>{
    return a+b;
}

console.log(addArrow(10,30));

// Define an object
const obj = {
  name: 'John',
  regularFunc: function() {
    console.log(this);
    console.log('Regular function:', this.name);
  }
};

// Call the regular function method
obj.regularFunc(); // Output: Regular function: John

// Assign the regular function to a variable
const regularFuncVar = obj.regularFunc;
// Call the regular function through the variable
regularFuncVar(); // Output: Regular function: undefined (or an error in strict mode)



console.log(this); // {}

// Define an object
const obj2 = {
  name: 'John',
  fn:function(){
    console.log("Outer fnc");
    console.log(this);
    const nested = ()=>{
        console.log("Nested Arrow lexical resolved")
        console.log(this);
    }
    nested();
  },
  arrowFunc: () => {
    console.log(this);
    console.log('Arrow function:', this.name);
    const nested = ()=>{
        console.log("Nested Arrow lexical resolved")
        console.log(this);
    }
    nested();
  }
};

obj2.fn();
const obj2Fn = obj2.fn;
obj2Fn();


obj2.arrowFunc();

const obj2ArrowFn = obj2.arrowFunc;
obj2ArrowFn();