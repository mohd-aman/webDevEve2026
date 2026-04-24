const falsyValues = [false,0,-0,NaN,undefined,null,""];

// Test each falsy value in an if statement
falsyValues.forEach(value => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});

const truthyValues = [1, -1, "hello", {}, [], () => {}];

// Test each truthy value in an if statement
truthyValues.forEach(value => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});


//application of truthy and false values

//conditional execution
const message = "";

if(!message){
    console.log("No message provided")
}


//logical operation
const port = process.env.PORT || 3000; // Use PORT from environment or default to 3000

//functional arguments
function greet(name) {
  name = name || "Guest"; // fallback to "Guest"
  console.log(`Hello, ${name}!`);
}



if([] && -0 && {} && "Hello"){
    console.log("One truthy")
}else{
    console.log("All falsy");
}