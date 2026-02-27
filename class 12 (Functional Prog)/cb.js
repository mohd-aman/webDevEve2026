//callback function 

// const exp = function(){
//     console.log("Hello world")
// }

// function sayHi(param){
//     console.log("I'm say HI and i'll invoke function received in paramater")
//     param();
// }

// sayHi(exp);

//cb = callback function
function printName(cb){
    console.log("Alan");
    cb();
}

printName(function(){
    console.log("Hello world, I'm callback function")
})

function lastName(){
    console.log("Singh");
}

// printName(lastName);


function printName(cb1,cb2,cb3){
    console.log("Alan");
    cb1();
    cb2();
    cb3(50);
}

function printAddress(){
    console.log("Lives in Delhi")
}

function printAge(age){
    console.log("60 years old",age)
}

printName(lastName,printAddress,printAge);