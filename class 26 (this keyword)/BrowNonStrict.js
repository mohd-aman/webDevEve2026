console.log("Scenario 1 : ");
console.log(this); // window

console.log("Scenario 2 : ");

function func(){
    console.log(this); // window
}

func();


const obj = {
    name:"Mike",
    fn:function (){
        console.log(this);
    }
}
console.log("Scenario 3 : ");
obj.fn();

console.log("Scenario 4 : ");
const objFn = obj.fn;
objFn();


const obj2 = {
  name:"Nested obj",
  fn: function () {
    console.log("Scenario 6 : ");
    console.log(this);
    const nestedFunc = function () {
      console.log("Scenario 5 : ");
      console.log(this);
    };
    nestedFunc();
  },
};

obj2.fn();
const obj2Fn = obj2.fn;
obj2Fn();