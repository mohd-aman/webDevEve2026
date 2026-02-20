//tradional way
function serveBeverage(drink){
    console.log(`Your drink ${drink} is served`);
}

serveBeverage("Coffee")

//function as an expression;
//function are known as first class citizen in js;
let serveBeverage2 = function(drink){
    console.log("I am function 2 ");
    console.log(`Here is your drink ${drink}`);
}

serveBeverage2("Tea");

//Arrow function;
let serveBeverage3 = ()=>{
    console.log("I am function 3");
    console.log("Shake")
}

serveBeverage3();